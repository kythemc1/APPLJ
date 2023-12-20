import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import {Colors} from 'react-native-ui-lib';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Header from 'Components/Commons/Header/Header';

export default function Ask({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Header  navigation={navigation}/>
      <View>
        <Image
          style={styles.imgWelcome}
          source={require('../../Assets/Images/study.jpg')}
        />
        <View style={styles.viewIntro}>
          <View>


            <Text style={styles.textIntro}>Hãy hỏi tôi</Text>
            <Text style={styles.textIntro}>- Sử dụng API từ OpenAI</Text>
            <Text style={styles.textIntro}>
              - Bro có thể nhập câu hỏi từ Chat
            </Text>
            <Text style={styles.textIntro}>- Tôi sẽ cho bro đáp án</Text>
            <Text style={styles.textIntro}>-Hãy tin tôi</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AskDetails');
            }}
            style={styles.buttonNav}>
            <Text style={styles.textNav}>Bắt đầu hỏi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f9f4f4'},
  imgWelcome: {
    height: Dimensions.get('window').height * 0.41,
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height * 0.05,
    borderRadius: 20,
  },
  buttonNav: {
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#2a4d69',
    height: 60,
    borderRadius: 10,
    alignSelf: 'center',
  },
  textNav: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 14,
    fontFamily: 'Poppins-Medium',
  },
  textIntro: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: Colors.text,
  },
  viewIntro: {
    height: Dimensions.get('window').height * 0.35,
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
