import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import SwitchTabLevelGrammar from "Components/SwitchTabLevelGrammar";

export default function Grammar({navigation}: any) {
  // @ts-ignore
    return (
    <SafeAreaView style={styles.container}>
        <View style={{backgroundColor:'#2a4d69'}}>
            <Text style={{fontSize :20,marginLeft: 20,color: 'white'}}>
                Grammar
            </Text>
        </View>

      <SwitchTabLevelGrammar/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#2a4d69'},
  logo: {height: 200, width: Dimensions.get('window').width * 0.9,alignSelf: "center"},
  textBody: {
    color: Colors.text,
  },
});
