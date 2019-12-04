import React, { Component, Fragment } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default class Rankflex extends Component {
    render() {
        return (
            <View style={{ marginTop: 0, backgroundColor: "rgba(255, 255, 255, 0.6)", height: 250, marginLeft: 15, marginRight: 15, borderWidth:0, borderColor: "black", borderRadius: 10, marginBottom: 10, shadowOffset: { width: 10, height: 10 }, shadowColor: 'black', shadowOpacity: 1, elevation: 3 }}>

                <View style={{ alignSelf: "center" }}>
                    <Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", marginTop: 10, marginBottom: 10, fontSize: 27, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10, alignContent: "center", textAlign: "center" }}>Rank Flex</Text>
                </View>

                <View style={{ flexDirection: "row", marginLeft: 20 }}>
                    {(this.props.flextier === "IRON") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/IRON.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.flextier === "BRONZE") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/BRONZE.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.flextier === "SILVER") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/SILVER.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.flextier === "GOLD") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/GOLD.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.flextier === "PLATINUM") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/PLATINUM.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.flextier === "DIAMOND") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/DIAMOND.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.flextier === "MASTER") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/MASTER.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.flextier === "GRANDMASTER") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/GRANDMASTER.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.flextier === "CHALLENGER") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/CHALLENGER.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    <View>

                        <View style={{ marginLeft: 30, flexDirection: "row", marginRight: 30, marginTop: 15 }}>
                            <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Divisão: </Text>
                            <Text style={{ color: "brown", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.flexrank}</Text>
                        </View>
                        <View style={{ marginLeft: 30, flexDirection: "row", marginRight: 0 }}>
                            <Text style={{ color: "brown", fontSize: 20, marginLeft: 0, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Pontos: {this.props.flexleaguepoints}</Text>
                        </View>
                        <View style={{ marginLeft: 30, marginTop: 6, flexDirection: "row", marginRight: 30 }}>
                            <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Vitórias: </Text>
                            <Text style={{ color: "brown", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.flexwins}</Text>
                        </View>
                        <View style={{ marginLeft: 30, flexDirection: "row", marginRight: 30 }}>
                            <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Derrotas: </Text>
                            <Text style={{ color: "brown", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.flexlosses}</Text>
                        </View>
                        <View style={{ marginLeft: 30, flexDirection: "row", marginRight: 30 }}>

                            <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Winrate: </Text>
                            {(this.props.winratesolo < 50) ?
                                (
                                    <View>
                                        <Text style={{ color: "red", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.flexwinrate + '%'}</Text>
                                    </View>
                                )
                                :
                                (
                                    <View>
                                        <Text style={{ color: "brown", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.flexwinrate + '%'}</Text>
                                    </View>
                                )}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
