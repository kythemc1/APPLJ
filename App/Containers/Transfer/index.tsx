import { View } from 'react-native';
import { TouchableOpacity, Text } from "react-native-ui-lib";
import React from 'react';
import Wrapper from '../../Components/Commons/Wrapper';

export default function Transfer() {
  return (
    <Wrapper>
      <TouchableOpacity flex bg-red justify-center items-center>
        <Text text-primary5>Transfer</Text>
      </TouchableOpacity>
    </Wrapper>
  );
}
