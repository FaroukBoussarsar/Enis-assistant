
import { Button } from "galio-framework";
import React, { useState } from "react";

import {
    StyleSheet,

    View,

} from "react-native";

import { Dimensions, Alert } from "react-native";

import Svg, {
    SvgXml,
    G,
    Circle,
    Defs,
    Use,

    Image,

} from "react-native-svg";

const Map = (props) => {

    const widthh = Dimensions.get("screen").width;
    const heightt = Dimensions.get("screen").height;

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#2b2b2b",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Svg height={heightt} width={widthh} preserveAspectRatio='none' viewBox='0 0 270 420'>

                <Image
                    x="0%"
                    y="-5%"
                    width="100%"
                    height="100%"
                    href={require("../assets/images/map-01.png")}


                />

                <Image
                    x="0%"
                    y="-5%"
                    width="100%"
                    height="100%"
                    opacity="1  "
                    href={require("../assets/images/map-02.png")}
                    clipPath="url(#image-clip)"
                    style={{

                    }}
                />
                <Image
                    x="10%"
                    y="14.5%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() =>{ 
                        console.log("here")
                        Alert.alert("stade foot", "bring a team and go play")}}
                />
              
                <Image
                    x="25%"
                    y="5%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() => Alert.alert("stade voller", 'ask your friend for a game ')}
                />
                <Image
                    x="8%"
                    y="29%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() => Alert.alert("bibliothèque", 'usually people do other stuff than studing')}
                />
                <Image
                    x="8%"
                    y="24%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() => Alert.alert("centre d'enovation", 'u can find events,and there is classes in the second floor')}
                />
                <Image
                    x="72%"
                    y="60%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() => Alert.alert("centre de calcul", 'there u can find amphi in the hall and in the other floors u can find classes')}
                />

                <Image
                    x="38%"
                    y="58%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() => Alert.alert("département électromécanique", 'some magic happen there')}
                />
                <Image
                    x="15%"
                    y="80%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() => Alert.alert("département génie civil", 'they are building somthing there')}
                />
                <Image
                    x="85%"
                    y="43%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() => Alert.alert("buvette", 'are you hangry too')}
                />
                <Image
                    x="60%"
                    y="2%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() => Alert.alert("département génie Electrique", 'carefull electricity')}
                />

                <Image
                    x="75%"
                    y="32%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() => Alert.alert("Amphi rond", 'probably there is a meeting there')}
                />
                <Image
                    x="58%"
                    y="70%"
                    width="7%"
                    height="7%"
                    opacity="1  "
                    href={require("../assets/images/location.png")}
                    clipPath="url(#image-clip)"
                    onPress={() => Alert.alert("idara", 'u got a  problem or looking to reserve a classroom ')}
                />


            </Svg>
        </View>)
}
const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: "#fdfdfd",
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: "#ededed",
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: "flex-start",
        marginTop: 1,
    },
    searchcontainer: {
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        opacity: 0.8

    },
})
export default Map