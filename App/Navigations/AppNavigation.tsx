import {View, Colors} from 'react-native-ui-lib';
import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TabNavigation from './TabNavigation';
import SignIn from '../Containers/SignIn';
import {SafeAreaView, StatusBar} from 'react-native';
import {useLang} from '../Hooks/useLang';
import Navigator from '../Utils/Navigator';
import IntroScreen from 'Containers/Introduction';
import Splash from 'Containers/Splash';
import ScanImage from 'Containers/ScanImage/ScanImage';
import Ask from 'Containers/Home';
import Listen from 'Containers/Listen';
import ListenDetails from 'Containers/ListenDetails';
import Dic from 'Containers/Dictionary';
import Vocabulary from 'Containers/Vocabulary';
import AskDetails from 'Containers/AskDetails.tsx';
import Grammar from "Containers/Grammar";
import Register from 'Containers/Register';
import ForgotPassword from 'Containers/ForgotPassword';
import GrammarDetails from "Containers/GrammarDetails";
import {TabComponentGrammarN1} from "Components/TabComponentGrammar/indexN1";
import ListenListVideo from "Containers/ListenListVideo";
import More from "Containers/More";
import UserProfileView from "Containers/UserSetting";
export default function AppNavigation() {
  useLang();
  const navigationRef = useRef<any | null>(null);
  // const isLogged = useSelector((state: RootState) => state.auth.auth.isLogged);

  const getInitialRouteName = () => {
    return 'TabNavigation';
  };

  const onRef = (ref: any) => {
    Navigator.setContainer(ref?.current);
  };

  useEffect(() => {
    onRef(navigationRef);
    console.log(navigationRef.current.getState());
  }, [navigationRef]);
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        translucent
        backgroundColor={'white'}
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
          <Stack.Screen name="ScanImage" component={ScanImage} />
          <Stack.Screen name="Ask" component={Ask} />
          <Stack.Screen name="AskDetails" component={AskDetails} />
          <Stack.Screen name="Listen" component={Listen} />
          <Stack.Screen name="ListenDetails" component={ListenDetails} />
          <Stack.Screen name="Dic" component={Dic} />
          <Stack.Screen name="Vocabulary" component={Vocabulary} />
          <Stack.Screen name="More" component={More} />
          <Stack.Screen name="Grammar" component={Grammar} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="GrammarDetails" component={GrammarDetails} />
          <Stack.Screen name="TabComponentGrammarN1" component={TabComponentGrammarN1} />
          <Stack.Screen name="ListenListVideo" component={ListenListVideo} />
          <Stack.Screen name="UserProfileView" component={UserProfileView} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
