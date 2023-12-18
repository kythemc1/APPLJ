import React from 'react';
import WebView from 'react-native-webview';
import HeaderChat from 'Components/Commons/HeaderChat';
import {View} from "react-native";
export default function Dic({navigation}: any) {
  return (
    <View>
      <HeaderChat screenBack={'TabNavigation'} navigation={navigation} />
      <WebView
        source={{
          uri: 'https://translate.google.com/?hl=vi&sl=ja&tl=vi&op=translate',
        }}
        style={{flex: 1}}
      />
    </View>
  );
}
