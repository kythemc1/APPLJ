import React from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import ListenComponent from 'Components/Commons/ListenComponent';
import {Colors} from 'react-native-ui-lib';

interface props {
    linkImg : string;
    navigation: any;
    srcPressN1 : string;

}

export default function LevelContainer(props: props) {
    return (


        <View style={styles.viewCourse}>
            <TouchableOpacity
                onPress={() => {

                    props.navigation.navigate(props.srcPressN1);
                }}>
                <ListenComponent
                    linkImg={props.linkImg}
                    name={'JLPT N5'}
                    color={'#2a4d69'}
                    navigation={props.navigation}
                />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f4f4',
        flex: 1,
    },
    imgRadio: {
        height: 200,
        width: 200,
        alignSelf: 'center',
    },
    viewRadio: {
        backgroundColor: '#a8e6cf',
        height: 300,
        width: 300,
    },
    viewCourse: {
        width: Dimensions.get('window').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 30,
    },
    textIntro: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        textAlign: 'center',
        color: Colors.text,
    },
});
