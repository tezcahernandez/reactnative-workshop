import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import NewsItem from './NewsItem'
import nytResponse from '../data/nytresponse'
const dataMock = [
    {
        id: 1,
        image: 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png',
        title: 'this is a title',
        subtitle: 'this is a subtitle',
        description: 'this is a large large large description'
    },
    {
        id: 2,
        title: 'este es un título',
        subtitle: 'este es un subtitulo',
        description: 'esta es una descripción larga larga larga'
    },
    {
        id: 3,
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
                    nytResponse.results.map((newsItem, index) => {
                        return (<NewsItem
                            key={index}
                            id={newsItem.updated_date}
                            imagePath={newsItem.multimedia.length ? newsItem.multimedia[0].url : null}
                            title={newsItem.title}
                            subtitle={newsItem.byline}
                            description={newsItem.abstract}
                        />)
                    })
                }

            </ScrollView>
        )
    }
}