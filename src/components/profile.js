import React, { Component, Fragment } from 'react'
import { Text, View, Image } from 'react-native';

class Profile extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <View style={{ alignSelf: "center" }}>
                    <Text style={{ color: "black", marginTop: 10, fontFamily: "Friz-Quadrata-Regular", marginBottom: 10, fontSize: 30, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Ícone</Text>
                </View>
                <View style={{ backgroundColor: "white", width: 120, height: 120, alignSelf: "center", marginTop: 0, borderRadius: 10 }}>
                    <Image
                        style={{ width: 100, height: 100, alignSelf: "center", position: "relative", top: 10 }}
                        source={{ uri: 'https://avatar.leagueoflegends.com/' + this.props.regiao + '/' + this.props.nome + '.png' }}
                    />
                </View>
                <View style={{ alignSelf: "center" }}>
                </View>
                <View style={{ marginTop: 40, backgroundColor: "white", height: 125, marginLeft: 20, marginRight: 20, marginBottom: 20, borderRadius: 20 }}>
                    <Text style={{ color: "black", alignSelf: "center", marginTop: 10, fontFamily: "Friz-Quadrata-Regular", marginBottom: 0, fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Dados de Invocador</Text>
                    <View style={{ marginLeft: 30, marginTop: 10, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                        <Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Nome: </Text>
                        <Text style={{ color: "green", fontFamily: "Friz-Quadrata-Regular", fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.nome}</Text>
                    </View>
                    <View style={{ marginLeft: 30, flexDirection: "row", alignSelf: "center", marginRight: 30 }}>
                        {(this.props.nome !== "Não encontrado") ?
                            (
                                < Text style={{ color: "black", fontFamily: "Friz-Quadrata-Regular", fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>Nível: </Text>

                            )
                            :
                            (
                                <View />
                            )
                        }
                        <Text style={{ color: "green", fontFamily: "Friz-Quadrata-Regular", fontSize: 25, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 2, height: 1 }, textShadowRadius: 10 }}>{this.props.nivel}</Text>
                    </View>
                </View>
            </Fragment >
        )
    }
}

export default Profile