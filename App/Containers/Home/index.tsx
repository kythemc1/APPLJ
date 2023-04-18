import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from 'Components/Commons/Header/Header';
const logo = require('../../Assets/Images/2.jpg');
const API_URL = 'https://api.openai.com/v1/completions';
const YOUR_API_KEY = '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';
const MAX_TOKENS = 1000;

export default function Ask() {
  const [messages, setMessages] = useState([]as any);
  useEffect(() => {
    firstMessage();
  }, []);

  const firstMessage = () =>{
    setMessages([
      {
        _id: 1,
        text: 'Này Nhóc :33',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot GPT',
          avatar: logo,
        },
      },
    ]);
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages:any) =>
      GiftedChat.append(previousMessages, messages),
    );
    const value = messages[0].text;
    callApi(value);
  }, []);

  const callApi = async (value:any) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          `Bearer ${YOUR_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: value,
        max_tokens: MAX_TOKENS,
        temperature: 0,
      }),
    });
    const data = await res.json();
    if (data) {
      const value = data?.choices[0]?.text;
      addNewMessage(value);
    }
  };

  const addNewMessage = (data: any) => {
    const value = {
      _id:  Math.random(999999999999),
      text: data,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Chatbot GPT',
        avatar: logo,
      },
    };

    setMessages((previousMessages:any) => GiftedChat.append(previousMessages, value));
  };

  const customtInputToolbar = (props:any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          borderTopColor: "#E8E8E8",
          borderTopWidth: 1,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
        <GiftedChat 
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={(messages:any) => onSend(messages)}
        renderInputToolbar={props => customtInputToolbar(props)}
        user={{
          _id: 1,
          avatar:logo
        }}
        keyboardShouldPersistTaps='never'
      />
      
    </SafeAreaView>
  );
}
