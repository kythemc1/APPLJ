import React, { Component } from "react";
import {StyleSheet, Pressable, Text, View, Image, TouchableOpacity, ScrollView} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "Store/reduxProvider";
import {black} from "react-native-paper/lib/typescript/styles/themes/v2/colors";
// import image from "../../Assets/Images/radio.png"
export default function UserProfileView()  {
    const username = useSelector((state: RootState)=> state.auth.user?.username)
    const address = useSelector((state: RootState)=> state.auth.user?.address)
    const firstname = useSelector((state: RootState)=> state.auth.user?.firstName)
    const lastname = useSelector((state: RootState)=> state.auth.user?.lastName)



        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Image
                            style={styles.location}
                            source={require("../../Assets/Images/ion-back.png")}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.hamburger}
                            source={require("../../Assets/Images/help.png")}
                        />
                    </View>
                    <View style={styles.headerContent}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.name}>Welcome</Text>
                            <Text style={styles.userInfo}>{username}</Text>
                        </View>
                        <View>
                            <Image
                                style={styles.avatar}
                                source={require("../../Assets/Images/background.jpg")}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>Do u want to change your profile ?</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <ScrollView  >
                        <Pressable style={styles.RectangleShapeView}>
                            <Text style={styles.headtText}>Address</Text>
                            <Text style={styles.SubjectText}>{address}</Text>
                        </Pressable>
                        <Pressable style={styles.RectangleShapeView}>
                            <Text style={styles.headtText}>Date</Text>
                            <Text style={styles.SubjectText}>30 Sept, 2022 </Text>
                        </Pressable>

                        <Pressable style={styles.RectangleShapeView}>
                            <Text style={styles.headtText}>Firstname</Text>
                            <Text style={styles.SubjectText}>{firstname}</Text>
                        </Pressable>
                        <Pressable style={styles.RectangleShapeView}>
                            <Text style={styles.headtText}>Lastname</Text>
                            <Text style={styles.SubjectText}>{lastname}</Text>
                        </Pressable>

                        <View>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textBtn}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#e7eff6',
        backgroundSize: "contain",
        height: 300
    },

    headerContent: {
        padding: 30,
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 2,
        borderColor: "white",
        marginBottom: 10,
    },
    location: {
        borderColor: "red",
        width: 10,
        height: 10,
    },
    hamburger: {
        borderColor: "white",
        width: 10,
        height: 10,
    },
    name: {
        fontSize: 22,
        color: "black",
        // fontWeight: "600",
        fontFamily: "Helvetica"
    },
    headtText: {
        fontFamily: "Helvetica",
        color: "grey",
        // fontWeight: "600",
        marginLeft: 20,
        marginTop: 10
    },
    SubjectText: {
        color: "black",
        // fontWeight: "550",
        fontSize: 16,
        fontFamily: "Helvetica",
        marginLeft: 20,
        marginTop: 10
    },
    userInfo: {
        fontSize: 20,
        color: "black",
        // fontWeight: "600"
    },
    btn: {
        marginTop: 20,
        backgroundColor: "#3B525F",
        borderRadius: 10,
        width: 200,
        height: 50,
        alignItems: "center",
        padding: 6,
        elevation: 3,
        alignSelf: "center"
    },
    body: {
        backgroundColor: "white",
        // height: 500,
        alignItems: "center",
        flex: 1
    },
    text: {
        color: "black",
        margin: 10
    },
    textBtn: {
        color: "white",
        margin: 10
    },
    RectangleShapeView: {
        marginTop: 20,
        width: 300,
        height: 80,
        backgroundColor: "white",
        color: "black",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        elevation: 3,
        alignSelf: "center"
    },
    container: {
        flex: 1
    }

});
