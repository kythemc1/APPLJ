import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {
    ScrollView,
    StyleSheet, Text, TouchableOpacity, View,

} from 'react-native';
import HeaderChat from "Components/Commons/HeaderChat";
import {useRoute} from "@react-navigation/native";
import {Colors} from "react-native-ui-lib";
import Mock from "Utils/Mock";
import RenderListTuVung from "Components/RenderListTuVung";

export default function GrammarDetails({navigation}: any) {
    const Voca_N3_1 = Mock.VocaN3_1;
    const route = useRoute()
    // @ts-ignore
    const {level,cate,name,page } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <HeaderChat navigation={navigation} screenBack={'TabNavigation'} />
            <ScrollView>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.textTittle}> ☛ ☞ Luyện tập với flash card</Text>
                    </TouchableOpacity>
                    {Voca_N3_1.map((items, index) => (
                        <RenderListTuVung key={index} state={items} />
                    ))}
                </View>
            </ScrollView>
                <Text>{level}</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#f9f4f4'},
    textTittle: {
        color: Colors.text,
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        textAlign: 'center',
    },
});
