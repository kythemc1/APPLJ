import React from 'react';
import Wrapper from '../../Components/Commons/Wrapper';
import WebView from 'react-native-webview';
import Header from 'Components/Commons/Header/Header';
export default function Dic() {
  return (
    <Wrapper>
      <Header />
       <WebView
      source={{ uri: 'https://translate.google.com/?hl=vi&sl=ja&tl=vi&op=translate' }}
      style={{ flex: 1 }}
    />
    </Wrapper>
  );
}
