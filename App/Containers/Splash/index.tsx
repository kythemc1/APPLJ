import {View, Text, Image, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';

export default function Splash({navigation}: any) {
  setTimeout(() => {
    navigation.navigate('SignIn');
  }, 3000);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flex: 1, alignSelf: 'center', marginTop: 100}}>
        <Image
          style={{
            height: 200,
            width: Dimensions.get('window').width * 0.9,
            alignSelf: 'center',
          }}
          source={require('../../Assets/Images/13610-logos_black.png')}
        />
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 15,
            textAlign: 'center',
            color: 'black',
          }}>
          Chinh phục tiếng Nhật cùng ứng dụng 13610!
        </Text>

        {/*<GIFImageView*/}
        {/*  style={{width: 400, height: 400, alignSelf: 'center', marginTop: 100}}*/}
        {/*  source={require('../../Assets/Images/goal.gif')}*/}
        {/*/>*/}
      </View>
    </SafeAreaView>
  );
}
