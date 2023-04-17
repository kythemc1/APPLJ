import {View, Text} from 'react-native-ui-lib';
import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TabNavigation from './TabNavigation';
import SignIn from '../Containers/SignIn';
import {StatusBar} from 'react-native';
import {useLang} from '../Hooks/useLang';
import Navigator from '../Utils/Navigator';
import IntroScreen from 'Containers/Introduction';
import SignInBiometric from 'Containers/SignInBiometric';
import Splash from 'Containers/Splash';
// import messaging from '@react-native-firebase/messaging';
export default function AppNavigation() {
  useLang();
  const navigationRef = useRef<any | null>(null);
  // const isLogged = useSelector((state: RootState) => state.auth.auth.isLogged);

  const getInitialRouteName = () => {
    return 'Splash';
  };

  const onRef = (ref: any) => {
    Navigator.setContainer(ref?.current);
  };

  useEffect(() => {
    onRef(navigationRef);
    console.log(navigationRef.current.getState());
  }, [navigationRef]);
  return (
    <View flex bg-white>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={getInitialRouteName()}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="SignInBiometric" component={SignInBiometric} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
