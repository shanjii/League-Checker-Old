import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, StatusBar, AsyncStorage, SafeAreaView, Header, Image, ScrollView, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import FadeInView from 'react-native-fade-in-view';



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
            apikey: ''

        }
    }

    _setapi = async () => {
        await AsyncStorage.setItem('@apikey', this.state.apikey)
    }

    _reload = () => {
        this._search();
    }

    async componentDidMount() {
        this.state.apikey = await AsyncStorage.getItem('@apikey')
    }


    _search = async () => {
        //console.warn(this.state.email + this.state.senha);
        this._loadingstart();
        this.setState({ ranksolo: '' })
        this.setState({ rankflex: '' })
        this.setState({ easteregg: 0 })
        await fetch('https://' + this.state.region + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.state.text, {
            method: 'GET',
            headers: {
                "Origin": "https://developer.riotgames.com",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Riot-Token": `${this.state.apikey}`,
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
                    this.setState({ name: "Não encontrado" })
                    this.setState({ ranksolo: '' })
                    this.setState({ rankflex: '' })
                } else {
                    this._searchrank();
                }


            })
    };

    _searchrank = async () => {
        //console.warn(this.state.email + this.state.senha);
        await fetch('https://' + this.state.region + '.api.riotgames.com/lol/league/v4/entries/by-summoner/' + this.state.summonerid, {
            method: 'GET',
            headers: {
                "Origin": "https://developer.riotgames.com",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Riot-Token": `${this.state.apikey}`,
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
                this._loadingend();
            })
    };

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
                <View style={{ backgroundColor: "lightblue", flex: 1 }}>
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false}>


                            <StatusBar backgroundColor="lightblue" />
                            <View>

                                <View style={{ marginTop: 40 }}>
                                    <TouchableWithoutFeedback onPress={this._contador} >
                                        <Image source={require("../assets/gnar.png")} style={{ alignSelf: "center", width: 100, height: 100, }} />
                                    </TouchableWithoutFeedback >
                                </View>
                                <Text style={{ color: "white", fontSize: 35, textAlign: "center", marginTop: 20, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>League Checker</Text>
                                <TouchableOpacity style={{ position: "relative", left: 350, top: 54 }} onPress={this._reset} >
                                    <Image source={require("../assets/delete.png")} style={{ width: 25, height: 25 }} />
                                </TouchableOpacity >
                                <View>
                                    <TextInput
                                        onChangeText={(text) => this.setState({ text })}
                                        value={this.state.text}
                                        style={{ fontSize: 20, textAlign: "center", fontFamily: "Friz-Quadrata-Regular", color: "white", borderBottomWidth: 1, borderBottomColor: "white", width: 300, alignSelf: "center", marginTop: 10, height: 50, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}
                                    />
                                </View>
                                <View style={{ marginTop: 30, width: 200, alignSelf: "center", }}>
                                    {(this.state.text !== '') ?
                                        (
                                            <Button color="white" onPress={this._search} mode="contained">
                                                Pesquisar
                                            </Button>
                                        ) :
                                        (
                                            <Text style={{ color: "white", fontSize: 15, textAlign: "center", marginTop: 0, textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily: "Friz-Quadrata-Regular", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Digite o nome do Invocador</Text>

                                        )}
                                </View>
                                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 40 }}>
                                    <TouchableOpacity
                                        onPress={this._setregionBR}
                                    >
                                        <Image
                                            source={require("../assets/BR.png")}
                                            style={{ width: 50, height: 50, borderRadius: 50 }}
                                        />
                                    </TouchableOpacity>
                                    <View style={{ marginLeft: 10, marginRight: 10 }} />
                                    <TouchableOpacity
                                        onPress={this._setregionEUW}
                                    >
                                        <Image
                                            source={require("../assets/EU.png")}
                                            style={{ width: 50, height: 50, borderRadius: 50 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                {(this.state.iconregion === "BR") ?
                                    (
                                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                                            <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginTop: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily: "Friz-Quadrata-Regular", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Região selecionada: </Text>
                                            <Text style={{ color: "green", fontSize: 20, textAlign: "center", marginTop: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily: "Friz-Quadrata-Regular", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.iconregion}</Text>
                                        </View>
                                    )
                                    :
                                    (
                                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                                            <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginTop: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily: "Friz-Quadrata-Regular", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Região selecionada: </Text>
                                            <Text style={{ color: "blue", fontSize: 20, textAlign: "center", marginTop: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily: "Friz-Quadrata-Regular", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.iconregion}</Text>
                                        </View>
                                    )}
                                {(this.state.name !== '') ?
                                    (<View>
                                        {(this.state.loading === 1) ?
                                            (
                                                <View style={{ marginTop: 20 }}>

                                                    <ActivityIndicator color="white" size="large" />
                                                </View>

                                            )
                                            :
                                            (

                                                <FadeInView duration={1000} style={{ marginTop: 30, marginLeft: 10, marginRight: 10, backgroundColor: "rgba(255, 255, 255, 0.5)", marginBottom: 20, borderRadius: 20 }}>
                                                    <View style={{ alignSelf: "center" }}>
                                                        <Text style={{ color: "black", marginTop: 10, fontFamily: "Friz-Quadrata-Regular", marginBottom: 10, fontSize: 30, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Ícone</Text>
                                                    </View>
                                                    <View style={{ backgroundColor: "white", width: 120, height: 120, alignSelf: "center", marginTop: 0, borderRadius: 10 }}>
                                                        <Image
                                                            style={{ width: 100, height: 100, alignSelf: "center", position: "relative", top: 10 }}
                                                            source={{ uri: 'https://avatar.leagueoflegends.com/' + this.state.region + '/' + this.state.name + '.png' }}
                                                        />
                                                    </View>
                                                    <View style={{ alignSelf: "center" }}>
                                                    </View>
                                                    <View style={{ marginTop: 40, backgroundColor: "white", height: 125, marginLeft: 20, marginRight: 20, marginBottom: 20, borderRadius: 20 }}>
                                                        <Text style={{ color: "black", alignSelf: "center", marginTop: 10, fontFamily: "Friz-Quadrata-Regular", marginBottom: 0, fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Dados de Invocador</Text>
                                                        <View style={{ marginLeft: 30, marginTop: 10, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                                                            <Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Nome: </Text>
                                                            <Text style={{ color: "green", fontFamily: "Friz-Quadrata-Regular", fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.name}</Text>
                                                        </View>
                                                        <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                                                            <Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Nível: </Text>
                                                            <Text style={{ color: "green", fontFamily: "Friz-Quadrata-Regular", fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.level}</Text>
                                                        </View>
                                                    </View>
                                                    {(this.state.ranksolo !== '') ?
                                                        (
                                                            <View style={{ marginTop: 20, backgroundColor: "white", height: 560, marginLeft: 20, marginRight: 20, borderRadius: 20, marginBottom: 20 }}>

                                                                <View style={{ alignSelf: "center" }}>
                                                                    <Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", marginTop: 10, marginBottom: 10, fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Ranqueada Solo/Duo</Text>
                                                                </View>
                                                                <View style={{ alignSelf: "center" }}>
                                                                    {(this.state.ranksolo.tier === "IRON") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/IRON.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.ranksolo.tier === "BRONZE") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/BRONZE.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.ranksolo.tier === "SILVER") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/SILVER.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.ranksolo.tier === "GOLD") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/GOLD.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.ranksolo.tier === "PLATINUM") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/PLATINUM.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.ranksolo.tier === "DIAMOND") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/DIAMOND.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.ranksolo.tier === "MASTER") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/MASTER.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.ranksolo.tier === "GRANDMASTER") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/GRANDMASTER.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.ranksolo.tier === "CHALLENGER") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/CHALLENGER.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                </View>
                                                                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30, marginTop: 10 }}>
                                                                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Divisão: </Text>
                                                                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.ranksolo.rank}</Text>
                                                                </View>
                                                                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                                                                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>PDL: </Text>
                                                                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.ranksolo.leaguePoints}</Text>
                                                                </View>
                                                                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                                                                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Vitórias: </Text>
                                                                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.ranksolo.wins}</Text>
                                                                </View>
                                                                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                                                                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Derrotas: </Text>
                                                                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.ranksolo.losses}</Text>
                                                                </View>
                                                                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>

                                                                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Winrate: </Text>
                                                                    {(this.state.winratesolo < 50) ?
                                                                        (
                                                                            <View>
                                                                                <Text style={{ color: "red", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.winratesolo + '%'}</Text>
                                                                            </View>
                                                                        )
                                                                        :
                                                                        (
                                                                            <View>
                                                                                <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.winratesolo + '%'}</Text>
                                                                            </View>
                                                                        )}
                                                                </View>

                                                            </View>
                                                        )

                                                        :
                                                        (
                                                            <View />
                                                        )
                                                    }
                                                    {(this.state.rankflex !== '') ?
                                                        (
                                                            <View style={{ marginTop: 20, backgroundColor: "white", height: 560, marginLeft: 20, marginRight: 20, borderRadius: 20, marginBottom: 20 }}>
                                                                <View style={{ alignSelf: "center" }}>
                                                                    <Text style={{ color: "black", marginTop: 10, fontFamily: "Friz-Quadrata-Regular", marginBottom: 10, fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Ranqueada Flex</Text>
                                                                </View>
                                                                <View style={{ alignSelf: "center" }}>
                                                                    {(this.state.rankflex.tier === "IRON") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/IRON.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.rankflex.tier === "BRONZE") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/BRONZE.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.rankflex.tier === "SILVER") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/SILVER.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.rankflex.tier === "GOLD") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/GOLD.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.rankflex.tier === "PLATINUM") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/PLATINUM.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.rankflex.tier === "DIAMOND") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/DIAMOND.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.rankflex.tier === "MASTER") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/MASTER.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.rankflex.tier === "GRANDMASTER") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/GRANDMASTER.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                    {(this.state.rankflex.tier === "CHALLENGER") ?
                                                                        (
                                                                            <Image source={require("../assets/ranks/CHALLENGER.png")} />
                                                                        )
                                                                        :
                                                                        (
                                                                            <View />
                                                                        )}
                                                                </View>
                                                                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30, marginTop: 10 }}>
                                                                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Divisão: </Text>
                                                                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.rankflex.rank}</Text>
                                                                </View>
                                                                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                                                                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>PDL: </Text>
                                                                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.rankflex.leaguePoints}</Text>
                                                                </View>
                                                                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                                                                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Vitórias: </Text>
                                                                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.rankflex.wins}</Text>
                                                                </View>
                                                                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                                                                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Derrotas: </Text>
                                                                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.rankflex.losses}</Text>
                                                                </View>
                                                                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30, marginBottom: 20 }}>
                                                                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Winrate: </Text>
                                                                    {(this.state.winrateflex < 50) ?
                                                                        (
                                                                            <View>
                                                                                <Text style={{ color: "red", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.winrateflex + '%'}</Text>
                                                                            </View>
                                                                        )
                                                                        :
                                                                        (
                                                                            <View>
                                                                                <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.state.winrateflex + '%'}</Text>
                                                                            </View>
                                                                        )}
                                                                </View>

                                                            </View>
                                                        )
                                                        :
                                                        (
                                                            <View />
                                                        )}
                                                </FadeInView>
                                            )}
                                    </View>
                                    )
                                    :
                                    (
                                        <View>
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
                                                        <View>
                                                            <Image
                                                                style={{ alignSelf: "center", marginTop: 20 }}
                                                                source={require("../assets/easteregg.gif")}
                                                            />
                                                        </View>
                                                        <View style={{ alignSelf: "center" }}>
                                                            <Text style={{ color: "red", textAlign: "center", marginTop: 10 }}>FODA BIXO AINDA NÃO APROVARAM MEU PROJETO E PRECISO FICAR TROCANDO O TOKEN</Text>
                                                            <TextInput style={{ textAlign: "center", backgroundColor: "white" }} onChangeText={(apikey) => this.setState({ apikey })} value={this.state.apikey}></TextInput>
                                                            <Button mode="contained" color="blue" onPress={this._setapi}>Enviar</Button>
                                                        </View>
                                                    </View>
                                                )
                                                :
                                                (
                                                    <View>

                                                    </View>
                                                )}

                                        </View>

                                    )}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Fragment>

        );
    }
}




export default Search;