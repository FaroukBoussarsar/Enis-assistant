
import * as React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import ChatBot from 'react-native-chatbot-expo';
import Chat from '../components/Chat'
export default function Chatbot() {

    return (
        <Chat />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});
