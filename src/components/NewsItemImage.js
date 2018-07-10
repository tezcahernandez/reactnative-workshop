import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback } from 'react-native';

export default class NewsItemImage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image style={{ height: 60, width: 60 }} source={{ uri: this.props.url }} />
      </View>
    )
  }
}
NewsItemImage.defaultProps = {
  url: 'https://cdn.browshot.com/static/images/not-found.png'
}