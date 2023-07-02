import React from 'react';
import Wrapper from '../../Components/Commons/Wrapper';
import WebView from 'react-native-webview';
import HeaderChat from 'Components/Commons/HeaderChat';
export default function Dic({navigation}: any) {
  return (
    <Wrapper>
      <HeaderChat screenBack={'TabNavigation'} navigation={navigation} />
      <WebView
        source={{
          uri: 'https://translate.google.com/?hl=vi&sl=ja&tl=vi&op=translate',
        }}
        style={{flex: 1}}
      />
    </Wrapper>
  );
}
