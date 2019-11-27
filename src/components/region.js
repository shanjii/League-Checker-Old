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
                        {(this.props.icon === "BR") ?
                            (
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={require("../assets/arrowup.gif")}
                                />
                            )
                            :
                            (
                                <View />
                            )
                        }
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10, marginRight: 10 }} />
                    <TouchableOpacity
                        onPress={this.props.regionEUW}
                    >
                        <Image
                            source={require("../assets/EU.png")}
                            style={{ width: 50, height: 50, borderRadius: 50 }}
                        />
                        {(this.props.icon === "EUW") ?
                            (
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={require("../assets/arrowup.gif")}
                                />
                                
                            )
                            :
                            (
                                <View />
                            )
                        }
                    </TouchableOpacity>
                </View>

            </Fragment>
        )
    }
}

export default Region
