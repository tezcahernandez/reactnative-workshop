import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback, Button } from 'react-native';
import MainNews from './MainNews';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class MainLayout extends React.Component {
    renderComponent() {
        let viewResult = null;
        switch (this.props.navigator) {
            case 'MainNews':
                viewResult = <MainNews />
                break;
            case 'MainNewsDetail':
                viewResult = <View><Text>MAIN NEWS DETAIL</Text></View>
                break;
            default:
                viewResult = <View><Text>NOT FOUND</Text></View>
                break;
        }
        return viewResult;
    }
    render() {
        return (
            <View>
                <Button title={'Go to News Detail'} onPress={() => {
                    this.props.navigateTo('MainNewsDetail')
                }} />
                {
                    this.renderComponent()
                }
            </View>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        navigator: state.NavigatorReducer
    }
}

export default connect(mapStateToProps, actions)(MainLayout);