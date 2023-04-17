import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import {  View, Text, TouchableOpacity, Image } from 'react-native';
import styleShare from '../../../Utils/Styles';

const Header = (props: any) => {
    return (
       
        <View style={{backgroundColor: 'white',height: 60 }}>
             <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                <Image source={require('../../../Assets/Images/3.jpg')} style={{height:40,width:40,borderRadius:90,marginLeft: 15,marginTop:5}} />
            
            <Text style={{color:'rgba(20, 57, 128, 1)', fontSize: 20, marginRight:15,marginTop:25}}>Learn with Jennie Kim</Text>
             </View>
            <View style={{height:1,width:2000,backgroundColor:'rgba(20, 57, 128, 1)'}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    
})
export default Header