import {View, Text, Image} from 'react-native';
import React from 'react';
export default function Splash({navigation}:any) {
  setTimeout(() => {
    navigation.navigate('SignIn');
}, 5000);

  return (
    <View style={{flex:1,alignSelf:'center',marginTop:100 }}>
      <Image style={{height:300,width:250}} source={require('../../Assets/Images/4.png')}/>
      <Text style={{fontSize:35,marginTop:100,alignSelf:'center',color:'rgba(20, 57, 128, 1)' }}>𝖁𝖚𝖆 𝕸𝖆̣̆𝖙 𝕿𝖗𝖆̆𝖓𝖌
</Text>
    </View>
  );
}
