import Header from "../../Components/Commons/Header/Header";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native-ui-lib";
import Wrapper from '../../Components/Commons/Wrapper';
import { ScrollView } from "react-native";
import styleNotification from "./styleNotification";
import styleShare from "../../Utils/Styles";
const Notification = (props: any) => {
    const { navigation } = props;

    const leftPress = () => {
        navigation.goBack()
    }
    return (
        <Wrapper>
            <Header
                title={'Thông báo'}
                leftPress={leftPress}
                imageLeft={require('../../Assets/Images/arrow-left.png')}
            />
            <ScrollView style={styleNotification.viewContent}>
                <TouchableOpacity style={styleNotification.viewItem}>
                    <View style={{ width: 60, alignItems: "center", justifyContent: "center", marginRight:10 }}>
                        <Image source={require('../../Assets/Images/notification.png')} style={{ with: 50, height: 50 }} />
                    </View>

                    <View style={{ width: styleShare.widthScreen - 130, justifyContent:"center" }}>
                        <Text style={{marginBottom:5, fontWeight:"bold" }} numberOfLines={3}>Dù đã hoàn thiện hạ tầng từ cuối năm 2018, đến nay, khu đô thị River Silk City - Sông Xanh tại TP Phủ Lý (Hà Nam) thưa vắng người ở. Đa số diện tích phân lô bán nền vẫn bị bỏ hoang, cỏ mọc um tùm</Text>
                        <Text style={{fontStyle:"italic"}}> 2 hours ago</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styleNotification.viewItem}>
                    <View style={{ width: 60, alignItems: "center", justifyContent: "center", marginRight:10 }}>
                        <Image source={require('../../Assets/Images/notification.png')} style={{ with: 50, height: 50 }} />
                    </View>

                    <View style={{ width: styleShare.widthScreen - 130, justifyContent:"center" }}>
                        <Text style={{marginBottom:5, fontWeight:"bold" }} numberOfLines={3}>Dù đã hoàn thiện hạ tầng từ cuối năm 2018, đến nay, khu đô thị River Silk City - Sông Xanh tại TP Phủ Lý (Hà Nam) thưa vắng người ở. Đa số diện tích phân lô bán nền vẫn bị bỏ hoang, cỏ mọc um tùm</Text>
                        <Text style={{fontStyle:"italic"}}> 2 hours ago</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styleNotification.viewItem}>
                    <View style={{ width: 60, alignItems: "center", justifyContent: "center", marginRight:10 }}>
                        <Image source={require('../../Assets/Images/notification.png')} style={{ with: 50, height: 50 }} />
                    </View>

                    <View style={{ width: styleShare.widthScreen - 130, justifyContent:"center" }}>
                        <Text style={{marginBottom:5, fontWeight:"bold" }} numberOfLines={3}>Dù đã hoàn thiện hạ tầng từ cuối năm 2018, đến nay, khu đô thị River Silk City - Sông Xanh tại TP Phủ Lý (Hà Nam) thưa vắng người ở. Đa số diện tích phân lô bán nền vẫn bị bỏ hoang, cỏ mọc um tùm</Text>
                        <Text style={{fontStyle:"italic"}}> 2 hours ago</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styleNotification.viewItem}>
                    <View style={{ width: 60, alignItems: "center", justifyContent: "center", marginRight:10 }}>
                        <Image source={require('../../Assets/Images/notification.png')} style={{ with: 50, height: 50 }} />
                    </View>

                    <View style={{ width: styleShare.widthScreen - 130, justifyContent:"center" }}>
                        <Text style={{marginBottom:5, fontWeight:"bold" }} numberOfLines={3}>Dù đã hoàn thiện hạ tầng từ cuối năm 2018, đến nay, khu đô thị River Silk City - Sông Xanh tại TP Phủ Lý (Hà Nam) thưa vắng người ở. Đa số diện tích phân lô bán nền vẫn bị bỏ hoang, cỏ mọc um tùm</Text>
                        <Text style={{fontStyle:"italic"}}> 2 hours ago</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styleNotification.viewItem}>
                    <View style={{ width: 60, alignItems: "center", justifyContent: "center", marginRight:10 }}>
                        <Image source={require('../../Assets/Images/notification.png')} style={{ with: 50, height: 50 }} />
                    </View>

                    <View style={{ width: styleShare.widthScreen - 130, justifyContent:"center" }}>
                        <Text style={{marginBottom:5, fontWeight:"bold" }} numberOfLines={3}>Dù đã hoàn thiện hạ tầng từ cuối năm 2018, đến nay, khu đô thị River Silk City - Sông Xanh tại TP Phủ Lý (Hà Nam) thưa vắng người ở. Đa số diện tích phân lô bán nền vẫn bị bỏ hoang, cỏ mọc um tùm</Text>
                        <Text style={{fontStyle:"italic"}}> 2 hours ago</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styleNotification.viewItem}>
                    <View style={{ width: 60, alignItems: "center", justifyContent: "center", marginRight:10 }}>
                        <Image source={require('../../Assets/Images/notification.png')} style={{ with: 50, height: 50 }} />
                    </View>

                    <View style={{ width: styleShare.widthScreen - 130, justifyContent:"center" }}>
                        <Text style={{marginBottom:5, fontWeight:"bold" }} numberOfLines={3}>Dù đã hoàn thiện hạ tầng từ cuối năm 2018, đến nay, khu đô thị River Silk City - Sông Xanh tại TP Phủ Lý (Hà Nam) thưa vắng người ở. Đa số diện tích phân lô bán nền vẫn bị bỏ hoang, cỏ mọc um tùm</Text>
                        <Text style={{fontStyle:"italic"}}> 2 hours ago</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styleNotification.viewItem}>
                    <View style={{ width: 60, alignItems: "center", justifyContent: "center", marginRight:10 }}>
                        <Image source={require('../../Assets/Images/notification.png')} style={{ with: 50, height: 50 }} />
                    </View>

                    <View style={{ width: styleShare.widthScreen - 130, justifyContent:"center" }}>
                        <Text style={{marginBottom:5, fontWeight:"bold" }} numberOfLines={3}>Dù đã hoàn thiện hạ tầng từ cuối năm 2018, đến nay, khu đô thị River Silk City - Sông Xanh tại TP Phủ Lý (Hà Nam) thưa vắng người ở. Đa số diện tích phân lô bán nền vẫn bị bỏ hoang, cỏ mọc um tùm</Text>
                        <Text style={{fontStyle:"italic"}}> 2 hours ago</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styleNotification.viewItem}>
                    <View style={{ width: 60, alignItems: "center", justifyContent: "center", marginRight:10 }}>
                        <Image source={require('../../Assets/Images/notification.png')} style={{ with: 50, height: 50 }} />
                    </View>

                    <View style={{ width: styleShare.widthScreen - 130, justifyContent:"center" }}>
                        <Text style={{marginBottom:5, fontWeight:"bold" }} numberOfLines={3}>Dù đã hoàn thiện hạ tầng từ cuối năm 2018, đến nay, khu đô thị River Silk City - Sông Xanh tại TP Phủ Lý (Hà Nam) thưa vắng người ở. Đa số diện tích phân lô bán nền vẫn bị bỏ hoang, cỏ mọc um tùm</Text>
                        <Text style={{fontStyle:"italic"}}> 2 hours ago</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </Wrapper>
    )
}

export default Notification