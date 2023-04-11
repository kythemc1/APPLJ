import React from 'react';
import Wrapper from '../../Components/Commons/Wrapper';
import { TouchableOpacity, View, Text } from 'react-native-ui-lib';
export default function Chart() {
  return (
    <Wrapper>
      <TouchableOpacity flex bg-red justify-center items-center>
        <Text>Chart</Text>
      </TouchableOpacity>
    </Wrapper>
  );
}
