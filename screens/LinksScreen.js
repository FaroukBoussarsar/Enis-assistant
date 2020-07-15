
import React, { useState } from "react";

import {
  StyleSheet,

  View,
  Image
} from "react-native";

import { Dimensions, Text } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

import { Overlay } from 'react-native-elements';

import { Button, Input } from 'galio-framework';

import Map from '../components/Map'
export default function ChatBot() {

  const w = Dimensions.get("window").width / 2
  const h = Dimensions.get("window").height / 2

  const [input, setInput] = useState('')
  // const [numberr, setnumberr] = useState(0)
  const [dict, setDict] = useState({ x: 0, y: 0, scale: 1, duration: 300 })
  // "positionX": 77,
  //"positionY": -200,

  var dictt = {

    '9000': { x: h / 8, y: -w / 2, scale: 3, duration: 3000 },

    '8000': { x: -h / 3.3, y: -110 * w / 200, scale: 3, duration: 3000 },
    '5000': {
      x: h * 2 / 5.1, y: -w, scale: 3, duration: 3000
    },
    '6000': { x: - h / 5, y: w * 3.7 / 3, scale: 4, duration: 3000 },
    '7000': { x: h * 0.45689, y: w * 0.6502, scale: 3, duration: 3000 },
    'amphi rond': { x: -4 * h / 11, y: w / 2, scale: 3, duration: 3000 },
    'amphi 1': { x: -h / 3.3, y: -110 * w / 200, scale: 3, duration: 3000 },
    'amphi 2': { x: -h / 3.3, y: -110 * w / 200, scale: 3, duration: 3000 },
    'amphi 3': { x: -h / 3.3, y: -110 * w / 200, scale: 3, duration: 3000 },
    'amphi 4': { x: -h / 3.3, y: -110 * w / 200, scale: 3, duration: 3000 },
    'amphi 5': { x: -h / 3.3, y: -110 * w / 200, scale: 3, duration: 3000 },

  }


  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setDict({ x: 0, y: 0, scale: 1, duration: 3000 })
    setVisible(!visible);
  };
  const [vissible, setVissible] = useState(false);

  const toggleOverlayy = () => {


    setVissible(!vissible);
  };
  const [visssible, setVisssible] = useState(true);

  const toggleOverlayyy = () => {


    setVisssible(!visssible);
  };
  // const whereAmI = () => {
  //   if (input.length === 4) {
  //     return (setisText('u need to go to the ' + input[1] + ' floor /n and look for your classroom there')
  //     )
  //   }
  // }
  // const [isScale, setisScale] = useState(false);
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={{ flex: 1, opacity: 0.8, zIndex: 99, flexDirection: "row", position: 'absolute', top: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
        <Input placeholder="are you lost ?" color="#50C7C7"
          style={{


            borderColor: "#50C7C7", alignSelf: 'stretch',
            flex: 1, justifyContent: "center", width: '100%'
          }}

          placeholderTextColor="#50C7C7" value={input}
          onChangeText={text => {
            setInput(text)

          }} />
        <Button onlyIcon icon="find" iconFamily="antdesign" iconSize={30}
          color="#50C7C7" iconColor="#fff"
          onPress={() => {

            let numberr;

            if (input.length === 4) {
              numberr = (Math.floor(parseInt(input) / 1000) * 1000)

              if (dictt.hasOwnProperty(numberr)) {
                setDict(dictt[numberr])
                console.log(numberr)
                setVisible(true)
              }
              else { setVissible(true) }
              console.log(numberr)

            }
            else {
              if (dictt.hasOwnProperty(input.toLowerCase())) {
                setDict(dictt[input.toLowerCase()])
                console.log(input)
              }
              else { setVissible(true) }
            }



          }} style={{ width: 40, height: 40 }} > </Button>

      </View>
      <ImageZoom
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={Dimensions.get("window").width}
        imageHeight={Dimensions.get("window").height}
        centerOn={dict}
        longPressTime={500}
        onLongPress={() => { setVisssible(true) }}
      //enableSwipeDown={true}
      //onMove={(pos) => { console.log(pos) }}

      >
        <Map />
      </ImageZoom>
      <View>
        <Button title="Open Overlay" onPress={toggleOverlay} />

        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={{ marginVertical: 10, width: w * 1.4 }}>
          <Image style={{ width: w/2, height: h * 0.3, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../assets/images/bot/3.png')} />
          <Text style={{ fontSize: w / 19, fontFamily: 'space-mono', alignSelf: 'center' }} >You need to go to the floor number {input[1]}  </Text>
          <Text style={{ fontSize: w / 19, fontFamily: 'space-mono', alignSelf: 'center' }}>And look for your classroom {input} there</Text>
   </View>
    </Overlay>
      </View>
      <View>
        <Button title="Open Overlay" onPress={toggleOverlayy} />

        <Overlay isVisible={vissible} onBackdropPress={toggleOverlayy}>
        <View style={{ marginVertical: 10, width: w * 1 }}>
          <Image style={{ width: w/2, height: h * 0.3, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../assets/images/bot/1.png')} />
          <Text style={{ fontSize: w / 19, fontFamily: 'space-mono', alignSelf: 'center' }}>i think i am lost too </Text>
      </View>
        </Overlay>
      </View>
      <View>
        <Button title="Open Overlay" onPress={toggleOverlayyy} />

        <Overlay isVisible={visssible} onBackdropPress={toggleOverlayyy}>
          <View style={{ flexDirection: 'row', width: w * 0.3 }}>


            <Image style={{ width: w / 4, height: h * 0.15, resizeMode: 'stretch', alignSelf: 'center' }}
              source={require('../assets/images/bot/3.png')} />
            <View style={{ width: w * 2.7 }}>
              <Text style={{
                fontSize: w / 8,
                fontFamily: 'space-mono',
                color: '#50C7C7',
                alignSelf: 'flex-start',
                fontWeight: 'bold'
              }}>
                ASKING FOR HELP
            </Text>
              <Text style={{ fontSize: w / 30, fontFamily: 'space-mono', marginRight: w * 1.5 }}>
                to show this help page longe press anywhere in the Map
               
          </Text>

            </View>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: 10, width: w * 1.5 }}>
           
          <Image style={{ width: w / 4, height: h * 0.15, resizeMode: 'stretch', alignSelf: 'center',  }}
              source={require('../assets/images/location.png')} />
            <Text style={{ fontSize: w / 18, fontFamily: 'space-mono', marginRight: w *0.3 }}>
             You can click on this symbole to learn more about your location
          </Text></View>
          <View style={{ flexDirection: 'row', marginVertical: 10, width: w * 1.5 }}>
           
          <Image style={{ width: w / 4, height: h * 0.15, resizeMode: 'stretch', alignSelf: 'center',  }}
              source={require('../assets/images/line.png')} />
            <Text style={{ fontSize: w / 18, fontFamily: 'space-mono', marginRight: w *0.3 }}>
             This shows you the pathes that you can walk from a place to another
          </Text></View>
          <View style={{ flexDirection: 'row', marginVertical: 10, width: w * 1.5 }}>
            <Text style={{ fontSize: w / 11, fontFamily: 'space-mono', color: '#50C7C7' }}>
              *
          </Text>
         <View>
            <Text style={{ fontSize: w / 16, fontFamily: 'space-mono', marginRight: w *0.3 }}>
             In the Search Bar you can type classes with numbers like :
          </Text>
          <Text style={{ fontSize: w / 20, fontFamily: 'space-mono', marginRight: w *0.3 }}>
            7102,8203..
          </Text>
          <Text style={{ fontSize: w / 16, fontFamily: 'space-mono', marginRight: w *0.3 }}>
            Amphies with typing :
          </Text>
          <Text style={{ fontSize: w / 20, fontFamily: 'space-mono', marginRight: w *0.3 }}>
            Amphi and the number (amphi 3,amphi rond)
          </Text>
          </View></View>
          
        </Overlay>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2b2b",
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
});