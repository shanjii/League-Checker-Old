import React, { Component, Fragment } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class Rankflex extends Component {
    render() {
        return (
            <View style={{ marginTop: 0, backgroundColor: "white", marginLeft: 10, marginRight: 10, borderRadius: 30, marginBottom: 20, shadowOffset: { width: 10, height: 10 }, shadowColor: 'black', shadowOpacity: 1, elevation: 3 }}>
                <View style={{ alignSelf: "center" }}>
                    <Text style={{ color: "black", alignContent: "center", textAlign: "center", fontFamily: "Friz-Quadrata-Regular", marginTop: 10, marginBottom: 0, fontSize: 27, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Maestrias</Text>
                    <Text style={{ color: "black", alignContent: "center", textAlign: "center", fontFamily: "Friz-Quadrata-Regular", marginTop: 0, marginBottom: 0, fontSize: 15, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Arraste para o lado</Text>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} persistentScrollbar alwaysBounceHorizontal={true} pagingEnabled={true} horizontal={true} style={{ marginLeft: 10, marginRight: 16 }}>
                    <View style={{ marginLeft: 0, marginTop: 10, marginRight: 0, flexDirection: "row" }}>
                        <Image
                            style={{ width: 120, height: 120, borderRadius: 20 }}
                            source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/9.23.1/img/champion/' + this.props.champMaestria1.name + '.png' }} />
                        <View style={{ marginLeft: 65, marginTop: 10 }}>
                            <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>1º</Text>
                            <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.champMaestria1.name}</Text>
                            <Text style={{ color: "green", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.maestria1.championPoints}</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 82, marginTop: 10, marginRight: 0, marginBottom: 10, flexDirection: "row" }}>
                        <Image
                            style={{ width: 120, height: 120, borderRadius: 20 }}
                            source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/9.23.1/img/champion/' + this.props.champMaestria2.name + '.png' }} />
                        <View style={{ marginLeft: 65, marginTop: 10 }}>
                            <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>2º</Text>
                            <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.champMaestria2.name}</Text>
                            <Text style={{ color: "green", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.maestria2.championPoints}</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 86, marginTop: 10, marginBottom: 10, marginRight: 100, flexDirection: "row" }}>
                        <Image
                            style={{ width: 120, height: 120, borderRadius: 20 }}
                            source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/9.23.1/img/champion/' + this.props.champMaestria3.name + '.png' }} />
                        <View style={{ marginLeft: 65, marginTop: 10 }}>
                            <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>3º</Text>
                            <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.champMaestria3.name}</Text>
                            <Text style={{ color: "green", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.maestria3.championPoints}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    }
}

