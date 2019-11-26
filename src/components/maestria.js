import React, { Component, Fragment } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class Rankflex extends Component {
    render() {
        return (
            <View style={{ marginTop: 20, backgroundColor: "white", height: 280, marginLeft: 60, marginRight: 60, borderRadius: 20, marginBottom: 20 }}>
                <Text style={{ alignSelf: "center", marginTop: 10, color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Maestrias</Text>
                <ScrollView horizontal={true}>
                    <View style={{ marginLeft: 65, marginTop: 30, marginRight: 30, marginBottom: 30 }}>
                        <Image
                            style={{ width: 120, height: 120 }}
                            source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/9.23.1/img/champion/' + this.props.champMaestria1.name + '.png' }} />
                        <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.champMaestria1.name}</Text>
                        <Text style={{ color: "green", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.maestria1.championPoints}</Text>
                    </View>
                    <View style={{ marginLeft: 30, marginTop: 30, marginRight: 30, marginBottom: 30 }}>
                        <Image
                            style={{ width: 120, height: 120 }}
                            source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/9.23.1/img/champion/' + this.props.champMaestria2.name + '.png' }} />
                        <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.champMaestria2.name}</Text>
                        <Text style={{ color: "green", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.maestria2.championPoints}</Text>
                    </View>
                    <View style={{ marginLeft: 30, alignSelf: "center", marginRight: 65 }}>
                        <Image
                            style={{ width: 120, height: 120 }}
                            source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/9.23.1/img/champion/' + this.props.champMaestria3.name + '.png' }} />
                        <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.champMaestria3.name}</Text>
                        <Text style={{ color: "green", textAlign: "center", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.maestria3.championPoints}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

