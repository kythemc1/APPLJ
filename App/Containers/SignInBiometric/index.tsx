import React, {useEffect, useState} from 'react';
import {
  View,
  // Image,
  SafeAreaView,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TouchableOpacity} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useChangeLang} from '../../Hooks/useLang';
import {RootState} from '../../Store/reduxProvider';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {Dimensions, StyleSheet} from 'react-native';
export default function SignInBiometric({navigation}: any) {
  const {t} = useTranslation();
  const {lang} = useSelector((state: RootState) => state.lang);
  const {onChangeLang} = useChangeLang();
  const [typeTouchID, setTypeTouchID] = useState('');

  useEffect(() => {
    BioSupported();
  }, []);
  const BioSupported = async () => {
    const rnBiometrics =
      Platform.OS == 'ios'
        ? new ReactNativeBiometrics({allowDeviceCredentials: true})
        : new ReactNativeBiometrics();

    await rnBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;
      switch (available && biometryType) {
        case BiometryTypes.TouchID:
          setTypeTouchID('TouchID');
          break;
        case BiometryTypes.FaceID:
          setTypeTouchID('FaceID');
          break;
        case BiometryTypes.Biometrics:
          setTypeTouchID('Biometrics');
          break;
        default:
          setTypeTouchID('');
          break;
      }
    });
  };

  const handleBiometric = async () => {
    const rnBiometrics =
      Platform.OS == 'ios'
        ? new ReactNativeBiometrics({allowDeviceCredentials: true})
        : new ReactNativeBiometrics();
    let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    let payload = epochTimeSeconds + 'some message';
    rnBiometrics.biometricKeysExist().then(async resultObject => {
      const {keysExist} = resultObject;
      if (keysExist) {
        rnBiometrics
          .createSignature({
            promptMessage: `${t('Signinbio.touch')}`,
            payload: payload,
          })
          .then(async resultObject => {
            const {success, signature} = resultObject;
            if (success) {
              // console.log('CreateSignature ', signature);
              // if (pinCode === pin) {
              navigation.navigate('TabNavigation');
              // }
            }
          })
          .catch();
      } else {
        // console.log('Keys do not exist or were deleted');
        await rnBiometrics.createKeys().then(resultObject => {
          const {publicKey} = resultObject;
        });
        rnBiometrics
          .createSignature({
            promptMessage: `${t('Signinbio.touch')}`,
            payload: payload,
          })
          .then(async resultObject => {
            const {success, signature} = resultObject;
            if (success) {
              // console.log('CreateSignature1 ', signature);
              navigation.navigate('');
            }
          })
          .catch();
      }
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.then}>
          <KeyboardAvoidingView
            style={styles.KeyBoardView}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.header}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.viewBack}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SignIn');
                    }}
                  />
                  <View>
                    <Text style={styles.textBack}>{t('Signinbio.back')}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.body}>

            </View>
            <Text style={styles.textwc}>{t('Signinbio.touch')}</Text>
            <View style={styles.endThen}>
              <TouchableOpacity
                style={styles.buttonloginRequest}
                onPress={() => {
                  handleBiometric();
                }}>
                <Text style={styles.textbutton}>
                  {t('Signinbio.btnfinger')}
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.1,
  },
  then: {
    flex: 1,
  },
  Vi: {
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.09375,
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'LexendDeca-Light',
  },
  backicon: {
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
  },
  icon: {
    marginLeft: Dimensions.get('window').width * 0,
    height: 35,
    width: 35,
    borderWidth: 1,
    zIndex: 2,
  },
  viewvi: {
    marginTop: Dimensions.get('window').width * 0.095,
    marginLeft: Dimensions.get('window').width * 0.52,
  },
  changeLanguage: {
    flexDirection: 'row',
  },
  textLanguage: {
    color: 'rgba(27, 61, 118, 1)',
    marginTop: 4,
    fontSize: 20,
    marginLeft: 0,
    fontFamily: 'LexendDeca-Medium',
  },
  textBack: {
    fontFamily: 'LexendDeca-Light',
    color: 'rgba(20, 57, 128, 1)',
    marginTop: 8,
    fontSize: 15,
  },
  viewBack: {
    width: Dimensions.get('window').width * 0.2,
    flexDirection: 'row',
    marginTop: Dimensions.get('window').width * 0.095,
    marginLeft: Dimensions.get('window').width * 0.05,
    justifyContent: 'space-between',
  },
  KeyBoardView: {flex: 1},
  body: {flex: 0.35},
  textwc: {
    flex: 0.15,
    marginTop: Dimensions.get('window').width * -0.05,
    textAlign: 'center',
    fontFamily: 'LexendDeca-Medium',
    fontSize: 25,
    color: '#143980',
  },
  Wc: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.2,
    marginTop: Dimensions.get('window').height * 0.08,
  },
  textUnderLogo: {
    fontSize: 13.5,
    color: 'rgba(130, 130, 130, 1)',
    alignSelf: 'center',
  },
  endThen: {alignItems: 'center', flex: 0.36},
  buttonloginRequest: {
    marginTop: Dimensions.get('window').height * 0.15,
    backgroundColor: '#143980',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: Dimensions.get('window').width * 0.65,
  },
  textbutton: {
    fontFamily: 'LexendDeca-Light',
    color: 'white',
    alignSelf: 'center',
  },
  spacebtn: {
    marginTop: Dimensions.get('window').height * 0.15,
  },
});
