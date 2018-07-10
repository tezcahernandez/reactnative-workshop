import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
export default class NewsItemDescription extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}