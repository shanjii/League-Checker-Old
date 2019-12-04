import React, { Component, Fragment } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const deviceWidth = Dimensions.get('window').width;

export default class Rankflex extends Component {
    render() {
        maestria1 = this.props.champMaestria1.name.replace(/ /g,"");
        maestria2 = this.props.champMaestria2.name.replace(/ /g,"");
        maestria3 = this.props.champMaestria3.name.replace(/ /g,"");

        return (
            <View style={{ marginTop: 0, backgroundColor: "rgba(255, 255, 255, 0.6)", marginLeft: 15, borderWidth:0, borderColor: "black", marginRight: 15, borderRadius: 10, marginBottom: 70, shadowOffset: { width: 10, height: 10 }, shadowColor: 'black', shadowOpacity: 1, elevation: 3 }}>
                <View style={{ alignSelf: "center" }}>
                    <Text style={{ color: "black", alignContent: "center", textAlign: "center", fontFamily: "Friz-Quadrata-Regular", marginTop: 10, marginBottom: 0, fontSize: 27, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Maestrias</Text>
                </View>
                <SwiperFlatList
                    showPagination
                    paginationActiveColor="black"
                >
                    <View style={{ marginTop: 10, marginLeft: 10, width: deviceWidth - 20, flexDirection: "row" }}>
                        <Image
                            style={{ width: 120, height: 120, borderRadius: 5 }}
                            source={{ uri: 'https://opgg-static.akamaized.net/images/lol/champion/'+maestria1+'.png' }} />
                        <View>
                            <Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", marginTop: 20, marginLeft: 20, marginBottom: 0, fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.champMaestria1.name}</Text>
                            <Text style={{ color: "brown", alignContent: "center", textAlign: "center", fontFamily: "Friz-Quadrata-Regular", marginTop: 0, marginLeft: 20, marginBottom: 0, fontSize: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.maestria1.championPoints} pontos</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 10, width: deviceWidth - 20, flexDirection: "row" }}>
                        <Image
                            style={{ width: 120, height: 120, borderRadius: 5 }}
                            source={{ uri: 'https://opgg-static.akamaized.net/images/lol/champion/'+maestria2+'.png' }} />
                        <View>
                            <Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", marginTop: 20, marginLeft: 20, marginBottom: 0, fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.champMaestria2.name}</Text>
                            <Text style={{ color: "brown", alignContent: "center", textAlign: "center", fontFamily: "Friz-Quadrata-Regular", marginTop: 0, marginLeft: 20, marginBottom: 0, fontSize: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.maestria2.championPoints} pontos</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 30, width: deviceWidth, flexDirection: "row" }}>
                        <Image
                            style={{ width: 120, height: 120, borderRadius: 5 }}
                            source={{ uri: 'https://opgg-static.akamaized.net/images/lol/champion/'+maestria3+'.png' }} />
                        <View>
                            <Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", marginTop: 20, marginLeft: 20, marginBottom: 0, fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.champMaestria3.name}</Text>
                            <Text style={{ color: "brown", alignContent: "center", textAlign: "center", fontFamily: "Friz-Quadrata-Regular", marginTop: 0, marginLeft: 20, marginBottom: 0, fontSize: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.maestria3.championPoints} pontos</Text>
                        </View>
                    </View>
                </SwiperFlatList>
            </View >
        )
    }
}

