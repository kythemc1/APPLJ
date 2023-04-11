import React from "react";
import { StyleSheet } from "react-native";
import styleShare from "../../Utils/Styles";

const styleNotification = StyleSheet.create({
    viewContent: {
        backgroundColor: "#e6e6e6",
        // backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    viewItem: {
        backgroundColor: "#fff",
        minHeight: 100,
        width: "100%",
        borderRadius: 10,
        padding:10,
        marginBottom:20,
        flexDirection:"row",
        borderColor: '#e0e7f4',
        borderWidth: 1,
        shadowColor: "rgba(0,0,0,0.1)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 1,
        elevation: 5,
    }
})

export default styleNotification;