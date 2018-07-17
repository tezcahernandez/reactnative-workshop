import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback, Button, Picker } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class MainLogin extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        txtUsuario: '',
        txtPassword: '',
        isLoading: false
    }
    
    render() {

        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View style={{
                    flex: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    marginTop: 40,
                    marginBottom: 40
                }}>
                    <Image source={require('../media/mycompany.png')}
                        style={{ width: 180, height: 50 }} />
                </View>
                <View style={{ flex: 7 }}>
                    <View style={{ flex: 3 }}>
                        <View style={{ marginLeft: 15, marginRight: 15 }}>
                            <Text>{this.state.txtUsuario}</Text>
                            <TextInput placeholder={'Usuario'} onChangeText={(_val) => {
                                this.setState({ txtUsuario: _val })

                                this.props.setUser({profile: {}})
                            }} />
                            <TextInput placeholder={'Contraseña'} onChangeText={(_val) => {
                                this.setState({ txtPassword: _val })
                            }} />
                        </View>
                    </View>
                    <View>
                        <Button title={'Login'} backgroundColor={'#3064AF'}
                            disabled={this.state.isLoading}
                            accessible={true}
                            accessibilityLabel={'btnLogin'}
                            onPress={() => {
                                //ToastAndroid.show(JSON.stringify(this.state), ToastAndroid.SHORT);
                                this.setState({ isLoading: true });
                                this.props.navigateTo('MainNews');
                                // setTimeout(() => {
                                //     // this.setState({ isLoading: false });
                                //     this.props.navigateTo('MainNews');
                                // }, 3000);

                                this.props.onChangeView('MainNews');
                            }}
                        />


                        {/* <View style={{ height: 15 }} />
                        <SocialIcon button backgroundColor='#488DF8' iconColor='#488DF8'
                            fontStyle={{ color: '#4c4c4c' }} title={'Login with Google'}
                            type='google'
                            onPress={() => {
                            }}
                        /> */}

                    </View>
                    {this.state.isLoading ? <Text>Cargando..</Text> : null}
                    {/* <ActivityIndicator animating={this.state.isLoading} size={'large'} /> */}
                    <View>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                            }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                {'Seleccionar idioma :'}
                            </Text>
                            <Picker
                                style={{ width: 120 }}
                                mode={'dropdown'}
                                selectedValue={'ES'}
                                onValueChange={(lang) => {

                                }}>
                                <Picker.Item label="Español" value="ES" />
                                <Picker.Item label="English" value="EN" />
                            </Picker>

                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navigator: state.NavigatorReducer
    }
}

export default connect(mapStateToProps, actions)(MainLogin);