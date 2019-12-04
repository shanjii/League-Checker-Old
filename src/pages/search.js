import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Header, Image, ScrollView, Dimensions, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import FadeInView from 'react-native-fade-in-view';
import Profile from '../components/profile'
import Region from '../components/region'
import Ranksolo from '../components/ranksolo'
import Rankflex from '../components/rankflex'
import Maestria from '../components/maestria'
import * as Animatable from 'react-native-animatable';
const deviceHeight = Dimensions.get('screen').height;



class Search extends Component {


    static navigationOptions = {
        header: null
    }

    constructor() {
        super();
        this.state = {
            level: '',
            text: '',
            name: '',
            summonerid: '',
            ranksolo: '',
            rankflex: '',
            loading: 0,
            winratesolo: 0,
            winrateflex: 0,
            region: 'BR1',
            iconregion: 'BR',
            easteregg: 0,
            champData: [],
            maestria1: [],
            maestria2: [],
            maestria3: [],
            champMaestria1: [],
            champMaestria2: [],
            champMaestria3: []
        }
    }


    _reload = () => {
        this._search();
    }

    componentDidMount = () =>{
        
    }

    _search = async () => {
        this._loadingstart();
        this.setState({ ranksolo: '' })
        this.setState({ rankflex: '' })
        this.setState({ easteregg: 0 })
        await fetch('https://' + this.state.region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.state.text, {
            method: 'GET',
            headers: {
                "Origin": "https://developer.riotgames.com",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Riot-Token": 'RGAPI-434298ec-16e8-44ad-855e-dbedaefd5327',
                "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
            }
        })

            .then(resposta => resposta.json())
            .then(response => {
                this.setState({ level: response.summonerLevel })
                this.setState({ name: response.name })
                this.setState({ summonerid: response.id })
                if (this.state.summonerid === undefined) {
                    this._loadingend();
                    this.setState({ name: "Não encontrado" })
                    this.setState({ ranksolo: '' })
                    this.setState({ rankflex: '' })
                } else {
                    this._searchrank();
                }


            })
    };

    _searchrank = async () => {
        await fetch('https://' + this.state.region + '.api.riotgames.com/lol/league/v4/entries/by-summoner/' + this.state.summonerid, {
            method: 'GET',
            headers: {
                "Origin": "https://developer.riotgames.com",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Riot-Token": 'RGAPI-434298ec-16e8-44ad-855e-dbedaefd5327',
                "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
            }
        })
            .then(resposta => resposta.json())
            .then(response => {

                for (let i = 0; i < response.length; i++) {
                    if (response[i].queueType === "RANKED_FLEX_SR") {
                        this.setState({ rankflex: response[i] })
                        this.setState({ winrateflex: Math.round((this.state.rankflex.wins / (this.state.rankflex.wins + this.state.rankflex.losses)) * 100) })
                    } else if (response[i].queueType === "RANKED_SOLO_5x5") {
                        this.setState({ ranksolo: response[i] })
                        this.setState({ winratesolo: Math.round((this.state.ranksolo.wins / (this.state.ranksolo.wins + this.state.ranksolo.losses)) * 100) })
                    }
                }
                this._searchChampions();
            })
    };

    _searchChampions = async () => {

        await fetch('https://' + this.state.region + '.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + this.state.summonerid, {
            method: 'GET',
            headers: {
                "Origin": "https://developer.riotgames.com",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Riot-Token": 'RGAPI-434298ec-16e8-44ad-855e-dbedaefd5327',
                "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
            }
        })
            .then(resposta => resposta.json())
            .then(response => {
                this.setState({ maestria1: response[0] })
                this.setState({ maestria2: response[1] })
                this.setState({ maestria3: response[2] })
            })
        await fetch('https://ddragon.leagueoflegends.com/cdn/9.23.1/data/en_US/champion.json')
            .then(resposta => resposta.json())
            .then(response => {

                Object.entries(response.data).forEach(element => {
                    if (element[1].key == this.state.maestria1.championId) {
                        this.setState({ champMaestria1: element[1] })
                    }
                    if (element[1].key == this.state.maestria2.championId) {
                        this.setState({ champMaestria2: element[1] })
                    }
                    if (element[1].key == this.state.maestria3.championId) {
                        this.setState({ champMaestria3: element[1] })
                    }
                });
            })

        this._loadingend();
    }

    _loadingstart = () => {
        this.setState({ loading: 1 })

    }

    _loadingend = () => {
        this.setState({ loading: 0 })
    }

    _setregionBR = () => {

        this.setState({ region: 'BR1' })
        this.setState({ iconregion: 'BR' })
        this.setState({ level: '' })
        this.setState({ text: '' })
        this.setState({ name: '' })
        this.setState({ summonerid: '' })
        this.setState({ summonerLevel: '' })
        this.setState({ ranksolo: '' })
        this.setState({ rankflex: '' })
        this.setState({ winratesolo: 0 })
        this.setState({ winrateflex: 0 })
        this.setState({ easteregg: 0 })
    }

    _setregionEUW = () => {
        this.setState({ region: 'EUW1' })
        this.setState({ iconregion: 'EUW' })
        this.setState({ level: '' })
        this.setState({ text: '' })
        this.setState({ name: '' })
        this.setState({ summonerid: '' })
        this.setState({ summonerLevel: '' })
        this.setState({ ranksolo: '' })
        this.setState({ rankflex: '' })
        this.setState({ winratesolo: 0 })
        this.setState({ winrateflex: 0 })
        this.setState({ easteregg: 0 })
        console.warn(this.state.iconregion)

    }

    _contador = () => {
        this.setState({ easteregg: this.state.easteregg + 1 })
    }

    _reset = () => {
        this.setState({ level: '' })
        this.setState({ text: '' })
        this.setState({ name: '' })
        this.setState({ summonerid: '' })
        this.setState({ summonerLevel: '' })
        this.setState({ ranksolo: '' })
        this.setState({ rankflex: '' })
        this.setState({ winratesolo: 0 })
        this.setState({ winrateflex: 0 })
        this.setState({ easteregg: 0 })
    }





    render() {
        return (
            <Fragment>
                <ImageBackground style={{ width: "100%", height: deviceHeight }} source={require("../assets/background.jpg")}>
                    <ScrollView keyboardShouldPersistTaps={"never"} showsVerticalScrollIndicator={false}>
                        <View>
                            <StatusBar translucent backgroundColor="transparent" />
                            {/* Logo */}
                            <Animatable.View animation="wobble" style={{ marginTop: 40, }}>
                                <TouchableWithoutFeedback onPress={this._contador} >
                                    <Image source={require("../assets/gnar.png")} style={{ alignSelf: "center", width: 100, height: 100 }} />
                                </TouchableWithoutFeedback >
                            </Animatable.View>

                            {/* Title */}
                            <Text style={{ color: "white", fontSize: 35, textAlign: "center", marginTop: 20, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>League Checker</Text>

                            {/* Delete */}
                            <TouchableOpacity style={{ position: "relative", left: "82%", top: 54 }} onPress={this._reset} >
                                <Image source={require("../assets/delete.png")} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity >

                            {/* Input */}
                            <View>
                                <TextInput
                                    onChangeText={(text) => this.setState({ text })}
                                    value={this.state.text}
                                    style={{ fontSize: 20, textAlign: "center", fontFamily: "Friz-Quadrata-Regular", color: "white", borderBottomWidth: 1, borderBottomColor: "white", width: "60%", alignSelf: "center", marginTop: 10, height: 50, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}
                                />
                            </View>

                            {/* Search Button */}
                            <Animatable.View animation="rubberBand" style={{ marginTop: 30, width: 200, alignSelf: "center", }}>
                                {(this.state.text !== '') ?
                                    (
                                        <Button color="lightgrey" onPress={this._search} mode="contained">
                                            Pesquisar
                                            </Button>
                                    ) :
                                    (
                                        <Text style={{ color: "white", fontSize: 15, textAlign: "center", marginTop: 0, textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily: "Friz-Quadrata-Regular", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Digite o nome do Invocador</Text>

                                    )}
                            </Animatable.View>

                            {/* Region */}
                            <Region regionBR={this._setregionBR} regionEUW={this._setregionEUW} icon={this.state.iconregion} />

                            {/* Listagens */}
                            <Fragment>
                                {(this.state.name !== '') ?
                                    (

                                        // Informações do usuário
                                        <Fragment>
                                            {(this.state.loading === 1) ?
                                                (
                                                    <View style={{ marginTop: 20 }}>
                                                        <ActivityIndicator color="white" size="large" />
                                                    </View>
                                                )
                                                :
                                                (
                                                    <View>

                                                        <View style={{ marginTop: 30, marginLeft: 0, marginRight: 0, marginBottom: 0, borderTopLeftRadius: 70, borderBottomLeftRadius: 70, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>

                                                            {/* Perfil */}
                                                            <Animatable.View animation="bounceInRight">
                                                                <Profile regiao={this.state.region} nome={this.state.name} nivel={this.state.level} />
                                                            </Animatable.View>

                                                            {/* Rank Solo */}
                                                            <Animatable.View animation="bounceInLeft">
                                                                {(this.state.ranksolo !== '') ?
                                                                    (
                                                                        <Ranksolo solotier={this.state.ranksolo.tier} solorank={this.state.ranksolo.rank} sololeaguepoints={this.state.ranksolo.leaguePoints} solowins={this.state.ranksolo.wins} sololosses={this.state.ranksolo.losses} solowinrate={this.state.winratesolo} />
                                                                    )
                                                                    :
                                                                    (
                                                                        <View />
                                                                    )
                                                                }
                                                            </Animatable.View>

                                                            {/* Rank Flex */}
                                                            <Animatable.View animation="bounceInRight">
                                                                {(this.state.rankflex !== '') ?
                                                                    (
                                                                        <Rankflex flextier={this.state.rankflex.tier} flexrank={this.state.rankflex.rank} flexleaguepoints={this.state.rankflex.leaguePoints} flexwins={this.state.rankflex.wins} flexlosses={this.state.rankflex.losses} flexwinrate={this.state.winrateflex} />
                                                                    )
                                                                    :
                                                                    (
                                                                        <View />
                                                                    )}
                                                            </Animatable.View>

                                                            {/* Maestria */}
                                                            <Animatable.View animation="bounceInLeft">
                                                                {(this.state.name !== 'Não encontrado') ?
                                                                    (
                                                                        <Maestria maestria1={this.state.maestria1} maestria2={this.state.maestria2} maestria3={this.state.maestria3} champMaestria1={this.state.champMaestria1} champMaestria2={this.state.champMaestria2} champMaestria3={this.state.champMaestria3} />
                                                                    )
                                                                    :
                                                                    (
                                                                        <View />
                                                                    )
                                                                }
                                                            </Animatable.View>
                                                        </View>
                                                    </View>
                                                )}
                                        </Fragment>
                                    )
                                    :
                                    (
                                        // Token Input
                                        <Fragment>
                                            {(this.state.loading === 1) ?
                                                (
                                                    <View style={{ marginTop: 20 }}>
                                                        <ActivityIndicator color="white" size="large" />
                                                    </View>
                                                )
                                                :
                                                (
                                                    <View />
                                                )}
                                            {(this.state.easteregg >= 10) ?
                                                (
                                                    <View>
                                                        <Image
                                                            style={{ alignSelf: "center", marginTop: 20 }}
                                                            source={require("../assets/easteregg.gif")}
                                                        />
                                                    </View>
                                                )
                                                :
                                                (
                                                    <View />
                                                )}
                                        </Fragment>
                                    )}
                            </Fragment>
                        </View>
                    </ScrollView>
                </ImageBackground >
            </Fragment>
        );
    }
}




export default Search;