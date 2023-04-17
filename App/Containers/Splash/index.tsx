import {View, Text, Image} from 'react-native';
import React from 'react';
export default function Splash({navigation}:any) {
  setTimeout(() => {
    navigation.navigate('SignIn');
}, 5000);

  return (
    <View style={{alignSelf:'center',marginTop:100}}>
      <Image source={require('../../Assets/Images/2.jpg')}/>
      <Text style={{fontSize:24,marginTop:100}}>Địt mẹ thằng thiện</Text>
    </View>
  );
}
