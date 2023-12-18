import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {API, API_KEY_CHAT_BOT} from 'Configs/Constants/API';
import HeaderChat from "Components/Commons/HeaderChat";
const logo = require('../../Assets/Images/2.jpg');
const API_URL = API.API_CHAT_BOT;
const YOUR_API_KEY = API_KEY_CHAT_BOT;
const MAX_TOKENS = 1000;

export default function AskDetails({navigation} : any) {
  const [messages, setMessages] = useState([] as any);
  useEffect(() => {
    firstMessage();
  }, []);

  const firstMessage = () => {
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
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages),
    );
    const value = messages[0].text;
    callApi(value);
  }, []);

  const callApi = async (value: any) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${YOUR_API_KEY}`,
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
      _id: Math.random(999999999999),
      text: data,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Chatbot GPT',
        avatar: logo,
      },
    };

    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, value),
    );
  };

  const customtInputToolbar = (props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: 'white',
          borderTopColor: '#E8E8E8',
          borderTopWidth: 1,
          borderRadius: 20,
          borderColor: 'blue',
          // height: 50,
          // marginBottom: 20
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderChat navigation={navigation} screenBack={'TabNavigation'} />
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={(messages: any) => onSend(messages)}
        renderInputToolbar={props => customtInputToolbar(props)}
        user={{
          _id: 1,
          avatar: logo,
        }}
        keyboardShouldPersistTaps="never"
        textInputProps={styles.textInput}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', // Màu nền của InputToolbar
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    marginHorizontal: 8,
  },
  textInput: {
    color: 'black', // Đặt màu chữ là đen
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
