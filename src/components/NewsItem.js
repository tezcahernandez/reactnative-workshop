import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback } from 'react-native';

import NewsItemTitle from './NewsItemTitle';
import NewsItemSubtitle from './NewsItemSubtitle';
import NewsItemImage from './NewsItemImage';
import NewsItemDescription from './NewsItemDescription';
import { connect } from 'react-redux';
import * as actions from '../actions'

class NewsItem extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
        <View style={{ flex: 2 }}>
          <NewsItemImage url={this.props.imagePath} />
        </View>
        <View style={{ flex: 7 }}>
          <View style={{ marginTop: 5, marginBottom: 5 }}>
            <NewsItemTitle text={this.props.title} />
            <NewsItemSubtitle text={this.props.subtitle} />
            <NewsItemDescription text={this.props.description} />
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: '#ccc' }}>
          <TouchableNativeFeedback onPress={() => {
            this.props.navigateTo('MainNewsDetail');
            this.props.setCurrentNews(this.props.id, this.props.title, this.props.subtitle, this.props.description, this.props.imagePath)
          }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Text>...</Text>
            </View>
          </TouchableNativeFeedback>

        </View>
      </View>
    )
  }
}

const styles = {}

const mapStateToProps = (state) => {
  return {
    navigator: state.NavigatorReducer
  }
}

export default connect(mapStateToProps, actions)(NewsItem);