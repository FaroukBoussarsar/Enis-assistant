import * as React from 'react';
import { LogBox, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import { useFonts } from 'expo-font';
const Stack = createStackNavigator();
// LogBox.ignoreAllLogs()
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  async function loadResourcesAndDataAsync() {
    try {
      SplashScreen.preventAutoHide();

      // Load our initial navigation state
      setInitialNavigationState(await getInitialState());

      // Load fonts
    // let res= await Font.loadAsync({
    //     ...Ionicons.font,
    //     'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    //   });
    //   let [fontsLoaded] = useFonts({
    //     'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    //   });
     if(fontsLoaded){
      setLoadingComplete(true);
      SplashScreen.hide();
     }
     
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      console.warn(e);
    }
     finally {
       setLoadingComplete(true);
      SplashScreen.hide();
    }
  }
  React.useEffect(() => {
   

    loadResourcesAndDataAsync();
  }, []);

  const [loaded] = useFonts({
    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  });
  
  if (!loaded && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
  },
});
