
import React, { Component, Fragment } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

class Ranksolo extends Component {
    render() {
        return (
            <View style={{ marginTop: 0, backgroundColor: "rgba(255, 255, 255, 0.6)", height: 250,borderWidth:0, borderColor: "black", marginLeft: 15, marginRight: 15, borderRadius: 10, marginBottom: 10, shadowOffset: { width: 10, height: 10 }, shadowColor: 'black', shadowOpacity: 1, elevation: 3 }}>

                <View style={{ alignSelf: "center" }}>
                    <Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", marginTop: 10, marginBottom:10, fontSize: 27, alignContent: "center", textAlign: "center", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10  }}>Rank Solo/Duo</Text>
                </View>

                <View style={{ flexDirection: "row", marginLeft: 20 }}>
                    {(this.props.solotier === "IRON") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/IRON.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "BRONZE") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/BRONZE.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "SILVER") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/SILVER.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "GOLD") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/GOLD.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "PLATINUM") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/PLATINUM.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "DIAMOND") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/DIAMOND.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "MASTER") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/MASTER.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "GRANDMASTER") ?
                        (
                            <Image style={{ width: 140, height: 180 }} source={require("../assets/ranks/GRANDMASTER.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "CHALLENGER") ?
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
                            <Text style={{ color: "brown", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.solorank}</Text>
                        </View>
                        <View style={{ marginLeft: 30, flexDirection: "row", marginRight: 0 }}>
                            <Text style={{ color: "brown", fontSize: 20, marginLeft: 0, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Pontos: {this.props.sololeaguepoints}</Text>
                        </View>
                        <View style={{ marginLeft: 30, marginTop: 6, flexDirection: "row", marginRight: 30 }}>
                            <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Vitórias: </Text>
                            <Text style={{ color: "brown", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.solowins}</Text>
                        </View>
                        <View style={{ marginLeft: 30, flexDirection: "row", marginRight: 30 }}>
                            <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Derrotas: </Text>
                            <Text style={{ color: "brown", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.sololosses}</Text>
                        </View>
                        <View style={{ marginLeft: 30, flexDirection: "row", marginRight: 30 }}>

                            <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Winrate: </Text>
                            {(this.props.winratesolo < 50) ?
                                (
                                    <View>
                                        <Text style={{ color: "red", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.solowinrate + '%'}</Text>
                                    </View>
                                )
                                :
                                (
                                    <View>
                                        <Text style={{ color: "brown", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.solowinrate + '%'}</Text>
                                    </View>
                                )}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Ranksolo


