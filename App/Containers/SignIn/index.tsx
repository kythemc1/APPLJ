import {View, Text, Colors, TouchableOpacity} from 'react-native-ui-lib';
import React, {useState} from 'react';
import Wrapper from '../../Components/Commons/Wrapper';
import {StyleSheet, TextInput} from 'react-native';
import {useAuth, useLogin} from '../../Hooks/API/Auth';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {setLang} from '../../Store/Reducers/langSlice';
import {RootState} from '../../Store/reduxProvider';
import {useChangeLang} from '../../Hooks/useLang';

export default function SignIn({navigation}: any) {
  const {t} = useTranslation();
  const {lang} = useSelector((state: RootState) => state.lang);
  const {onChangeLang} = useChangeLang();
  const {onSetAccount, account} = useAuth();
  const {onLogin, loading} = useLogin();

  return (
    <View>
      <View pt-100 px-lg>
        <Text text-center text-grey10 font-bold text-xxxxl>
          {t('sign_in.sign_in')}
        </Text>
        <View mt-md>
          <Text text-grey10 text-base>
            {t('sign_in.username')}
          </Text>
          <View h-48 rounded-8 border-grey3 centerV>
            <TextInput
              value={account.username}
              onChangeText={(username: string) =>
                onSetAccount('username', username)
              }
              //placeholder={t('sign_in.username')}
              placeholderTextColor={Colors.grey3}
              style={styles.input}
            />
          </View>
        </View>
        <View mt-md>
          <Text text-grey10 text-base>
            {t('sign_in.password')}
          </Text>
          <View h-48 mt-8 rounded-8 border-grey3 centerV>
            <TextInput
              value={account.password}
              onChangeText={(password: string) =>
                onSetAccount('password', password)
              }
              // placeholder={t('sign_in.password')}
              placeholderTextColor={Colors.grey3}
              secureTextEntry
              style={styles.input}
            />
          </View>
        </View>

        <TouchableOpacity
          mt-lg
          bg-primary5
          rounded-8
          onPress={() => onLogin(account)}
          py-nm>
          <Text text-center text-white font-medium text-base>
            {t('sign_in.sign_in')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          mt-lg
          bg-primary5
          rounded-8
          onPress={() => onChangeLang(lang)}
          py-nm>
          <Text text-center text-white font-medium text-base>
            {t('sign_in.change_lang')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          mt-lg
          bg-primary5
          rounded-8
          onPress={() => navigation.navigate('SignInBiometric')}
          py-nm>
          <Text text-center text-white font-medium text-base>
            {t('sign_in.sign_in_bio')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingHorizontal: 16,
  },
});
