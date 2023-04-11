import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Spacings, View, Text, TouchableOpacity, Image } from 'react-native-ui-lib';
import styleShare from '../../../Utils/Styles';

const Header = (props: any) => {
    return (
        <View style={styles.viewHeader}>
            {
                <View style={styles.viewButtonLeft}>
                    {
                        props.leftPress ?
                            <TouchableOpacity

                                onPress={props.leftPress}
                            >
                                <Image source={props.imageLeft} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity> : <Text></Text>
                    }
                </View>

            }
            <Text style={styles.textStyle}>{props.title ? props.title : null}</Text>
            <View style={styles.viewButtonRight}>
                {
                    props.rightPress ?
                        <TouchableOpacity
                            onPress={props.rightPress}
                        >
                            <Image source={props.imageRight} style={{ width: props.width, height: props.height }} />
                        </TouchableOpacity> : <Text></Text>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewHeader: {
        width: styleShare.widthScreen,
        height: 50,
        backgroundColor: styleShare.mainColor,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15
    },
    textStyle: {
        color: "#fff",
        fontSize: 18
    },
    viewButtonLeft: {
        width: 50
    },
    viewButtonRight: {
        width: 50,
        alignItems:"flex-end"
    }
})
export default Header