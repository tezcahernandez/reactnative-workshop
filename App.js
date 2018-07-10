import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dataMock = [
      {
        image: 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png',
        title: 'this is a title',
        subtitle: 'this is a subtitle',
        description: 'this is a large large large description'
      },
      {
        title: 'este es un título',
        subtitle: 'este es un subtitulo',
        description: 'esta es una descripción larga larga larga'
      }
    ]
    return (
      <ScrollView>
        {dataMock.map((newsItem, index) => {
          return (<NewsItem
            key={index}
            imagePath={newsItem.image}
            title={newsItem.title}
            subtitle={newsItem.subtitle}
            description={newsItem.description}
          />)
        })}

      </ScrollView>
    )
  }
}

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
          <TouchableNativeFeedback>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Text>...</Text>
            </View>
          </TouchableNativeFeedback>

        </View>
      </View>
    )
  }
}
class NewsItemImage extends React.Component {
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
class NewsItemTitle extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{this.props.text}</Text>
      </View>
    )
  }
}

class NewsItemSubtitle extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 16, fontStyle: 'italic' }}>{this.props.text}</Text>
      </View>
    )
  }
}

class NewsItemDescription extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}
