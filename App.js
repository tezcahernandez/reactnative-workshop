import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'

import MainLayout from './src/components/MainLayout'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <MainLayout />
      </Provider >
    )
  }
}

// import MainNews from './src/components/MainNews'
// import NewsItemTitle from './src/components/NewsItemTitle'
// import NewsItemDescription from './src/components/NewsItemDescription'

// class MainNewsDetail extends React.Component {

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <View style={{ flex: 1, backgroundColor: '#ccc' }}>
//           <View>

//           </View>
//         </View>
//         <View style={{ flex: 9 }}>
//           <Text>

//           </Text>
//         </View>
//       </View>
//     )
//   }
// }