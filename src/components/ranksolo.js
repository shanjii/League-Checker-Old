
import React, { Component, Fragment } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

class Ranksolo extends Component {
    render() {
        return (
            <View style={{ marginTop: 20, backgroundColor: "white", height: 560, marginLeft: 20, marginRight: 20, borderRadius: 20, marginBottom: 20 }}>

                <View style={{ alignSelf: "center" }}>
                    <Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", marginTop: 10, marginBottom: 10, fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Ranqueada Solo/Duo</Text>
                </View>
                <View style={{ alignSelf: "center" }}>
                    {(this.props.solotier === "IRON") ?
                        (
                            <Image source={require("../assets/ranks/IRON.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "BRONZE") ?
                        (
                            <Image source={require("../assets/ranks/BRONZE.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "SILVER") ?
                        (
                            <Image source={require("../assets/ranks/SILVER.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "GOLD") ?
                        (
                            <Image source={require("../assets/ranks/GOLD.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "PLATINUM") ?
                        (
                            <Image source={require("../assets/ranks/PLATINUM.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "DIAMOND") ?
                        (
                            <Image source={require("../assets/ranks/DIAMOND.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "MASTER") ?
                        (
                            <Image source={require("../assets/ranks/MASTER.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "GRANDMASTER") ?
                        (
                            <Image source={require("../assets/ranks/GRANDMASTER.png")} />
                        )
                        :
                        (
                            <View />
                        )}
                    {(this.props.solotier === "CHALLENGER") ?
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
                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.solorank}</Text>
                </View>
                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>PDL: </Text>
                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.sololeaguepoints}</Text>
                </View>
                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Vitórias: </Text>
                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.solowins}</Text>
                </View>
                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                    <Text style={{ color: "black", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Derrotas: </Text>
                    <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.sololosses}</Text>
                </View>
                <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>

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
                                <Text style={{ color: "green", fontSize: 25, fontFamily: "Friz-Quadrata-Regular", textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.solowinrate + '%'}</Text>
                            </View>
                        )}
                </View>
            </View>
        )
    }
}

export default Ranksolo


