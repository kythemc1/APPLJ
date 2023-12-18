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
    url : number;
    level : string;
    pressToScreen: string;
    id : number;
}
export default function ComponentPressToListen(props: props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.pressShow}
                onPress={() => {
                    props.navigation.navigate(props.pressToScreen,{level : props.level,name: props.name,id: props.id,url: props.url});
                }}>
                <Text style={styles.textTittle}>{props.name}{'   '+props.level}{'   '+props.id}</Text>
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
