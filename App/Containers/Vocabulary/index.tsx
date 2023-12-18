import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import MOCK_DATA from 'Utils/Mock';
import {Colors} from 'react-native-ui-lib';
import SwitchTabLevel from "Components/SwitchTabLevelGrammar";

export default function Vocabulary({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>

        <View style={{backgroundColor: "#2a4d69"}}>
          <Text style={{fontSize :20,marginLeft: 20,color: '#fff'}}>
            Vocabulary
          </Text>
        </View>
        <SwitchTabLevel  scren={'Vocabulary'}></SwitchTabLevel>
       </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f9f4f4'},
  logo: {height: 200, width: Dimensions.get('window').width * 0.9,alignSelf: "center"},
  textBody: {
    color: Colors.text,
  },
});
