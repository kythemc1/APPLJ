import React from 'react';
import {Image, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Wrapper from '../../Components/Commons/Wrapper';
import {useAuth} from '../../Hooks/API/Auth';
import FImage from '../../Components/Commons/FImage';
import {RootState} from '../../Store/reduxProvider';
import {useSelector} from 'react-redux';
import {useChangeLang, useListLanguages} from '../../Hooks/useLang';
import {useTranslation} from 'react-i18next';
import FList from '../../Components/Commons/FList';
import Header from '../../Components/Commons/Header/Header';

export default function More({navigation}: any) {
  const {onLogout} = useAuth();
  const {onChangeLang} = useChangeLang();
  const {t} = useTranslation();
  const {listLanguages} = useListLanguages();
  const {lang} = useSelector((state: RootState) => state.lang);
  const {user} = useSelector((state: RootState) => state.auth);

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
        {/* <View flex-row items-center>
          <View rounded-9999 border-xsss border-primary5 w-80 h-80 mr-16>
            <FImage url="https://i.pravatar.cc/300" radius={9999} />
          </View>
          <Text text-grey10 text-40 font-medium>
            {user?.firstName} {user?.lastName}
          </Text>
        </View> */}
        {/* <View flex-row justify-between mt-40 px-20>
          <TouchableOpacity
            onPress={onLogout}
            p-16
            bg-primary5
            rounded-xl
            justify-center
            items-center>
            <Text text-base text-white>
              {t('more.logout')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onChangeLang(lang)}
            p-16
            rounded-xl
            bg-primary5
            // @ts-expect-error
            _key="ADMIN">
            <Text text-base text-white>
              {t('more.change_lang')}
            </Text>
          </TouchableOpacity>
        </View> */}
        <View
          style={{
            width: '100%',
            height: 120,
            backgroundColor: '#fff',
            flexDirection: 'row',
            paddingHorizontal: 10,
            alignItems: 'center',
          }}>
          <Image
            style={{width: 80, height: 80, borderRadius: 40, marginRight: 20}}
            source={{uri: 'https://i.pravatar.cc/300'}}
          />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 5}}>
              Nguyễn Đình Mạnh
            </Text>
            <Text style={{color: 'gray', fontSize: 16}}>
              dinhmanhhaui@gmail.com
            </Text>
          </View>
        </View>
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
