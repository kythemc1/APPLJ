import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import {View} from 'react-native-ui-lib';
const IntroScreen = ({navigation}: any) => {
  return (
    <View flex={true} marginT-xxl>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          width: 100,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Back</Text>
      </TouchableOpacity>
      <WebView
      style={{flex:1}}
        source={{
          uri: 'https://www.autodraw.com/',
        }}></WebView>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
