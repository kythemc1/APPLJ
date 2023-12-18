import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native-ui-lib';
interface props {
  name: string;
  navigation : any;
  page : number;
  level : string;
  cate : string;
  pressToScreen: string;
}
export default function ComponentOnpressShowList(props: props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.pressShow}
        onPress={() => {
          props.navigation.navigate(props.pressToScreen,{level : props.level,name: props.name,cate: props.cate,page: props.page});
        }}>
        <Text style={styles.textTittle}>{props.name}{'   '+props.level}{'   '+props.page}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    borderRadius: 20,
    // marginBottom: 20,
    marginTop: 20
  },
  textTittle: {
    color: Colors.text,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  pressShow: {
    padding: 10,
  },
});
