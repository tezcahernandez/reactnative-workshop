import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback } from 'react-native';

import MainNews from './src/components/MainNews'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <MainNews />
    )
  }
}





