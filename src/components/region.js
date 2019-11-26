import React, { Component, Fragment } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';

class Region extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 40 }}>
                    <TouchableOpacity
                        onPress={this.props.regionBR}
                    >
                        <Image
                            source={require("../assets/BR.png")}
                            style={{ width: 50, height: 50, borderRadius: 50 }}
                        />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10, marginRight: 10 }} />
                    <TouchableOpacity
                        onPress={this.props.regionEUW}
                    >
                        <Image
                            source={require("../assets/EU.png")}
                            style={{ width: 50, height: 50, borderRadius: 50 }}
                        />
                    </TouchableOpacity>
                </View>
                {
                    (this.props.icon === "BR") ?
                        (
                            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                                <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginTop: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily: "Friz-Quadrata-Regular", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Região selecionada: </Text>
                                <Text style={{ color: "green", fontSize: 20, textAlign: "center", marginTop: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily: "Friz-Quadrata-Regular", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.icon}</Text>
                            </View>
                        )
                        :
                        (
                            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                                <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginTop: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily: "Friz-Quadrata-Regular", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Região selecionada: </Text>
                                <Text style={{ color: "blue", fontSize: 20, textAlign: "center", marginTop: 20, textShadowColor: 'rgba(0, 0, 0, 0.5)', fontFamily: "Friz-Quadrata-Regular", textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.icon}</Text>
                            </View>
                        )
                }
            </Fragment>
        )
    }
}

export default Region
