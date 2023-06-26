import React from 'react';
import {Image, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Wrapper from '../../Components/Commons/Wrapper';
import Header from '../../Components/Commons/Header/Header';

export default function More({navigation}: any) {
  const renderRowItem = (iconLeft: any, title: string, onPress: () => void) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 60,
          width: '100%',
          backgroundColor: '#fff',
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={iconLeft}
            style={{width: 40, height: 40, marginRight: 10}}
          />
          <Text style={{fontSize: 18}}>{title ? title : ''}</Text>
        </View>
        <Image
          source={require('../../Assets/Images/arrow-right.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <Wrapper>
      <Header />
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}>
        <ScrollView>
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 20,
              fontWeight: 'bold',
              color: 'gray',
              fontSize: 18,
            }}>
            Game
          </Text>
          {renderRowItem(
            require('../../Assets/Images/change_password.png'),
            'Draw',
            () => {
              navigation.navigate('Intro');
            },
          )}
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 20,
              fontWeight: 'bold',
              color: 'gray',
              fontSize: 18,
            }}>
            Khác
          </Text>
          {renderRowItem(
            require('../../Assets/Images/info.png'),
            'Scan Image',
            () => {
              navigation.navigate('ScanImage');
            },
          )}
        </ScrollView>
      </View>
    </Wrapper>
  );
}
