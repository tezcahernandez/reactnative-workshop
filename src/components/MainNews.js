import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import NewsItem from './NewsItem'
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
    },
    {
        title: 'este es un título',
        subtitle: 'este es un subtitulo',
        description: 'esta es una descripción larga larga larga'
    }
]
export default class MainNews extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <ScrollView>
                {
                    dataMock.map((newsItem, index) => {
                        return (<NewsItem
                            key={index}
                            imagePath={newsItem.image}
                            title={newsItem.title}
                            subtitle={newsItem.subtitle}
                            description={newsItem.description}
                        />)
                    })
                }

            </ScrollView>
        )
    }
}