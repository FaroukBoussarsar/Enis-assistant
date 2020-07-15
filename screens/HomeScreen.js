
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';


import { Accordion, Block } from 'galio-framework';


export default function HomeScreen() {

  const w = Dimensions.get('window').width / 4;
  const h = Dimensions.get('window').height / 4;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={{ fontSize: w / 6, fontFamily: 'space-mono' }}>Welcome to ENIS Assistant</Text>
          <Image style={{ width: w, height: h * 0.6, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../assets/images/bot/2.png')} />

          <Text style={{
            fontSize: w / 7,
            fontFamily: 'space-mono',
            color: '#50C7C7', marginHorizontal: 20,
            alignSelf: 'flex-start',
            fontWeight: 'bold'
          }}>
            About ENIS Assistant
            </Text>
          <Text style={{ fontSize: w / 8, fontFamily: 'space-mono', marginHorizontal: 20 }}>
            This app is made by Farouk Boussarsar as a end term project using react native technology.

          </Text>
          <Text style={{ fontSize: w / 8, fontFamily: 'space-mono', marginHorizontal: 20 }}>
            This app is built to help enis student and foreigners who are visiting ENIS to know the way for classroom,asking about some information..

          </Text>
          <View style={{ flexDirection: 'row', marginVertical: 40 }}>


            <Image style={{ width: w, height: h * 0.6, resizeMode: 'stretch', alignSelf: 'center' }}
              source={require('../assets/images/bot/5.png')} />
            <View style={{ width: w * 2.7 }}>
              <Text style={{
                fontSize: w / 7,
                fontFamily: 'space-mono',
                color: '#50C7C7', marginHorizontal: 20,
                alignSelf: 'flex-start',
                fontWeight: 'bold'
              }}>
                About ChatBot
            </Text>
              <Text style={{ fontSize: w / 8, fontFamily: 'space-mono', marginHorizontal: 20 }}>
               His name is ENIS he loves helping people ,he helps whenever he could. try to ask him :how can you help ? to learn more 

          </Text>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginVertical: 10 }}>


            <Image style={{ width: w, height: h * 0.6, resizeMode: 'stretch', alignSelf: 'center' }}
              source={require('../assets/images/bot/3.png')} />
            <View style={{ width: w * 2.7 }}>
              <Text style={{
                fontSize: w / 7,
                fontFamily: 'space-mono',
                color: '#50C7C7', marginHorizontal: 20,
                alignSelf: 'flex-start',
                fontWeight: 'bold'
              }}>
                About Maps
            </Text>
              <Text style={{ fontSize: w / 8, fontFamily: 'space-mono', marginHorizontal: 20 }}>
               It is an ofline maps that can help you find your classroom or your destination you are looking for .
                the yellow path is the path in which you can follow to find your destination. you can try and type Amphi rond or 8203

          </Text>
            </View>
          </View >
          <View style={{ flexDirection: 'row', marginVertical: 10  }}>


            <Image style={{ width: w, height: h * 0.6, resizeMode: 'stretch', alignSelf: 'center' }}
              source={require('../assets/images/bot/4.png')} />
            <View style={{ width: w * 2.7 }}>
              <Text style={{
                fontSize: w / 7,
                fontFamily: 'space-mono',
                color: '#50C7C7', marginHorizontal: 20,
                alignSelf: 'flex-start',
                fontWeight: 'bold'
              }}>
                About Me
            </Text>
              <Text style={{ fontSize: w / 8, fontFamily: 'space-mono', marginHorizontal: 20 }}>
                I am Farouk Boussarsar ,I study here at National Engineering School of Sfax a.k.a ENIS,I Love learning new things ,
                I love also Art,Dancing and Video Games .
               

          </Text>
          <Text style={{ fontSize: w / 8, fontFamily: 'space-mono', marginHorizontal: 20 }}> If you find a problem in the app or you maybe looking for dev,designer contact me </Text>
          <Text style={{ fontSize: w / 8, fontFamily: 'space-mono', marginHorizontal: 20 ,color: '#50C7C7'}}> Farouk.boussarsar@stud.enis.tn</Text>
            </View>
          </View>


        </View>

      </ScrollView>

    </View >
  );
}

HomeScreen.navigationOptions = {
  header: null,
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

});
