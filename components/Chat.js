import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Keyboard,
    Dimensions,
    Animated,
    Platform,
} from 'react-native';
//import { Icon } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';
import Expo from 'expo';

let window = Dimensions.get('window');
const contentHeight = window.height - 130;
const avatarBot = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/40891196781631.5eb5e6b66438f.png";

export default class GiftedChatApp extends Component {
    static navigationOptions = {
        title: 'ChatBot'
    }

    constructor(props) {
        super(props);
        this.getDialogFlow = this.getDialogFlow.bind(this);
        this.state = { gifted: [], answers: [], height: contentHeight };
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        //Expo.Speech.stop();
    }

    _keyboardDidShow = (e) => {
        this.setState({ height: contentHeight - e.endCoordinates.height });
        // console.log(this.state.contentHeight, 'Keyboard Shown');
    }

    _keyboardDidHide = (e) => {
        this.setState({ height: contentHeight });
        // console.log(this.state.contentHeight, 'Keyboard Hidden');
    }

    UNSAFE_componentWillMount() {
        this.setState({
            gifted: [
                {
                    _id: 1,
                    text: 'Hi, My Name is ENIS.How can i help you',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Botler',
                        avatar: avatarBot,
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            gifted: GiftedChat.append(previousState.gifted, messages),
        }))
        this.getDialogFlow(messages[0].text)
    }

    async getDialogFlow(msg) {

        const ACCESS_TOKEN = 'c1ceb70733ac4345a704048b97443cd4';

        try {
            const response = await fetch(`https://api.dialogflow.com/v1/query?v=20150910`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                },
                body: JSON.stringify({
                    query: msg,
                    lang: 'en',
                    sessionId: '3da0d64d-0b23-a836-7236-ae424b16a139'
                })
            })

            let responseJson = await response.json();

            //const imageUrl = 'anc';
            //alert(responseJson.result.fulfillment.speech);
            //responseJson.result.fulfillment.messages.map((item, i) => {
            //if (item.payload !== undefined){
            //if(item.payload.imageUrl !== undefined) {
            //imageUrl = item.payload.imageUrl;
            //}
            //}
            //return imageUrl
            //})
            //alert(responseJson.result.fulfillment.speech);
            let answers = [
                {
                    _id: responseJson.id,
                    text: responseJson.result.fulfillment.speech,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Botler',
                        avatar: avatarBot,
                    },
                    //image: imageUrl,
                    imageProps: {
                        height: 200,
                        width: 200
                    }
                },
            ]

            //Expo.Speech.stop()
            //Expo.Speech.speak(responseJson.result.fulfillment.speech)

            this.setState(previousState => ({
                gifted: GiftedChat.append(previousState.gifted, answers),
            }))

            return responseJson;

        } catch (error) {
            console.error(error);
        }
    }

    renderChat = () => {
        return (
            <GiftedChat
                textInputProps={{ autoFocus: true }}
                messages={this.state.gifted}
                placeholder='Ask me anything...'
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        );
    }

    render() {
        if (Platform.OS === 'ios') {
            return this.renderChat();
        }
        else {
            return (
                <View style={{ height: this.state.height }}>
                    {this.renderChat()}
                </View>
            )
        }
    }
}