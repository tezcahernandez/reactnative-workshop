import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, TextInput, ScrollView, Image, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import NewsItem from './NewsItem'
import nytResponse from '../data/nytresponse'

class fetchServer {

    async call(httpMethod, url, headers, body) {
        let requestObject = {
            method: httpMethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        for (let attrName in headers) {
            requestObject.headers[attrName] = headers[attrName];
        }
        if (body !== undefined && body !== null) requestObject["body"] = JSON.stringify(body);

        try {
            let serverResponse = await fetch(url, requestObject);
            let responseJson = await serverResponse.json();
            return responseJson;
        } catch (e) {
            console.log(e);
        }

    }
}

export default class MainNews extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        nytResponse: [],
        isLoading: true
    }
    componentDidMount() {
        this.getNews();
    }
    async getNews() {
        const resource = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=bfa088dff8404d7abca9f7bf7b1ca4da";
        let response = await new fetchServer().call('GET', resource, {}, null);
        this.setState({ nytResponse: response.results, isLoading: false });
        //https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=yourapi-key 
    }
    render() {
        return (
            <ScrollView>
                <ActivityIndicator animating={this.state.isLoading} />
                {
                    this.state.nytResponse.map((newsItem, index) => {
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