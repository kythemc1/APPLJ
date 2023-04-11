import {View, Text} from 'react-native-ui-lib';
import {Platform} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../Store/reduxProvider';

const Stack = createNativeStackNavigator();

import TabNavigation from './TabNavigation';
import SignIn from '../Containers/SignIn';
import Notification from '../Containers/Notification';
import {StatusBar} from 'react-native';
import {useLang} from '../Hooks/useLang';
import Navigator from '../Utils/Navigator';
import IntroScreen from 'Containers/Introduction';
import SignInBiometric from 'Containers/SignInBiometric';
// import messaging from '@react-native-firebase/messaging';
export default function AppNavigation() {
  useLang();
  const navigationRef = useRef<any | null>(null);
  const isLogged = useSelector((state: RootState) => state.auth.auth.isLogged);

  const getInitialRouteName = () => {
    if (isLogged) {
      return 'TabNavigation';
    }
    return 'SignIn';
  };

  const onRef = (ref: any) => {
    Navigator.setContainer(ref?.current);
  };

  useEffect(() => {
    onRef(navigationRef);
    console.log(navigationRef.current.getState());
  }, [navigationRef]);

  // useEffect(()=>{
  //   checkPermissionFireBase();
  //   //background
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //   });
  //   //Foreground
  //   messaging().onMessage( remoteMessage => {
  //    console.log("remoteMessage", remoteMessage);
  //   })
  //   // Check whether an initial notification is available
  //   // kill
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //     });
  // },[])

  // const checkPermissionFireBase = async () => {
  //   if (Platform.OS == 'ios') {
  //     const enabled = await messaging().hasPermission();
  //     if (enabled == 1 || enabled == 2) {
  //       getTokenFirebase();
  //     } else {
  //       requestPermissionFireBase();
  //     }
  //   } else {
  //     getTokenFirebase();
  //   }
  // };

  // const getTokenFirebase = async() => {
  //   const fcmTokenNew = await messaging().getToken();
  //   console.log("fcmTokenNew",fcmTokenNew);
  // }
  // const requestPermissionFireBase = async () => {
  //   try {
  //     let per = await messaging().requestPermission();
  //     // User has authorised
  //     console.log('queen', per);
  //     getTokenFirebase();
  //   } catch (error) {
  //     // User has rejected permissions
  //     console.log('quyền bị từ chối');
  //   }
  // };
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
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="SignInBiometric" component={SignInBiometric} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
