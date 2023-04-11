import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, Text, View } from 'react-native';

const logo = require('../../Assets/Images/2.jpg');

const API_URL = 'https://api.openai.com/v1/completions';
const YOUR_API_KEY = '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';
const MAX_TOKENS = 1000;

export default function Home() {
  const [messages, setMessages] = useState([]as any);

  useEffect(() => {
    firstMessage();
  }, []);

  const firstMessage = () =>{
    setMessages([
      {
        _id: 1,
        text: 'Hello Kid :33',
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

  const callApi = async (value:any )=> {
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
      console.log('Data: ', value);
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
          // padding: 8
          // marginTop:20
          borderRadius:10,
          width:Dimensions.get("window").width*0.9,
          marginLeft: Dimensions.get("window").width*0.05,
          
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height:100,width:Dimensions.get("window").width*1,backgroundColor:'grey',borderRadius:10}}>
          <Text style={{fontSize:30,color:"white",alignSelf:'center', marginTop:10}}>Chatbot</Text>
          <Text style={{fontSize:30,color:"white",alignSelf:'center', marginTop:2}}>With Jennie</Text>
      </View>
      {/* <KeyboardAvoidingView style={styles.withoutkeyboard}> */}
        <GiftedChat 
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={(messages:any) => onSend(messages)}
        renderInputToolbar={props => customtInputToolbar(props)}
        user={{
          _id: 1,
          avatar:logo
        }}
      />
      {/* </KeyboardAvoidingView> */}
      
    </SafeAreaView>
  );
}
