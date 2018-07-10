import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { StyleSheet, Text, View, WebView, ScrollView, Image } from 'react-native';
import NewsItem from './NewsItem'


class MainNewsDetail extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <WebView
                    source={{ uri: 'https://github.com/facebook/react-native' }}
                    style={{ flex: 1, backgroundColor: "#fff" }}
                /> */}

                <NewsItem
                    id={this.props.currentNews.id}
                    imagePath={this.props.currentNews.image}
                    title={this.props.currentNews.title}
                    subtitle={this.props.currentNews.subtitle}
                    description={this.props.currentNews.description}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentNews: state.CurrentNewsReducer
    }
}

export default connect(mapStateToProps, actions)(MainNewsDetail);