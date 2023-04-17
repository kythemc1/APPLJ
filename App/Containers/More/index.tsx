import React from 'react';
import {Image, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Wrapper from '../../Components/Commons/Wrapper';
import {useAuth} from '../../Hooks/API/Auth';
import {useChangeLang, useListLanguages} from '../../Hooks/useLang';
import {useTranslation} from 'react-i18next';
import Header from '../../Components/Commons/Header/Header';

export default function More({navigation}: any) {
  const {onLogout} = useAuth();
  const {onChangeLang} = useChangeLang();
  const {t} = useTranslation();
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
      <Header
        title={t('tabs.more')}
        imageRight={require('../../Assets/Images/logout.png')}
        rightPress={onLogout}
        height={30}
        width={30}
      />
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
            Tài khoản
          </Text>
          {renderRowItem(
            require('../../Assets/Images/change_password.png'),
            'Đổi mật khẩu',
            () => {
              navigation.navigate('Intro');
            },
          )}
          {renderRowItem(
            require('../../Assets/Images/version.png'),
            'Phiên bản',
            () => {
              navigation.navigate('Intro');
            },
          )}
          {renderRowItem(
            require('../../Assets/Images/language.png'),
            'Ngôn ngữ',
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
            require('../../Assets/Images/policy.png'),
            'Chính sách và quy định',
            () => {
              navigation.navigate('Intro');
            },
          )}
          {renderRowItem(
            require('../../Assets/Images/help.png'),
            'Hỗ trợ và giúp đỡ',
            () => {
              navigation.navigate('Intro');
            },
          )}
          {renderRowItem(
            require('../../Assets/Images/note.png'),
            'Hướng dẫn sử dụng',
            () => {
              navigation.navigate('Intro');
            },
          )}
          {renderRowItem(
            require('../../Assets/Images/info.png'),
            'Về chúng tôi',
            () => {
              navigation.navigate('Intro');
            },
          )}
        </ScrollView>
      </View>
    </Wrapper>
  );
}
