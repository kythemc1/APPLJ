import React from 'react';
import Wrapper from '../../Components/Commons/Wrapper';
import { TouchableOpacity, View, Text } from 'react-native-ui-lib';
import Header from '../../Components/Commons/Header/Header';

export default function Home(props: any) {
  const {navigation} = props;
  const rightPress = () => {
    navigation.navigate('Notification')
  }
  return (
    <Wrapper>
      <Header
        imageRight={require('../../Assets/Images/bell.png')}
        rightPress={rightPress}
        width={50}
        height={50}
      />
      <TouchableOpacity flex bg-red justify-center items-center>
        <Text text-primary5>Home</Text>
      </TouchableOpacity>
    </Wrapper>
  );
}
