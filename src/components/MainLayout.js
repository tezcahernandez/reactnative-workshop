import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback, Button } from 'react-native';
import MainNews from './MainNews';
import MainNewsDetail from './MainNewsDetail';
import { connect } from 'react-redux';
import * as actions from '../actions/index'
import { Header } from 'react-native-elements';

class MainLayout extends React.Component {
    renderComponent() {
        let viewResult = null;
        switch (this.props.navigator) {
            case 'MainNews':
                viewResult = <MainNews />
                break;
            case 'MainNewsDetail':
                viewResult = <MainNewsDetail />
                break;
            default:
                viewResult = <View><Text>NOT FOUND</Text></View>
                break;
        }
        return viewResult;
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Header
                        leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => { this.props.back() } }}
                        centerComponent={{ text: this.props.currentNews.title, style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff', onPress: () => { this.props.navigateToHome() } }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    {
                        this.renderComponent()
                    }
                </View>
            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        currentNews: state.CurrentNewsReducer,
        navigator: state.NavigatorReducer
    }
}

export default connect(mapStateToProps, actions)(MainLayout);