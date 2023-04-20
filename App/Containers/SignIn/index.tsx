import {View, Text, TouchableOpacity, Keyboard, Platform} from 'react-native';
import React, { useEffect } from 'react';
import {Dimensions, Image, KeyboardAvoidingView, StyleSheet, TextInput} from 'react-native';
import {useAuth} from '../../Hooks/API/Auth';
import {useTranslation} from 'react-i18next';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

export default function SignIn({navigation}: any) {
  const {t} = useTranslation();
  const {onSetAccount, account,login} = useAuth();
  // useEffect(() => {
  //   BioSupported();
  // }, []);
  // const BioSupported = async () => {
  //   const rnBiometrics =
  //     Platform.OS == 'ios'
  //       ? new ReactNativeBiometrics({allowDeviceCredentials: true})
  //       : new ReactNativeBiometrics();

  //   await rnBiometrics.isSensorAvailable().then(resultObject => {
  //     const {available, biometryType} = resultObject;
  //     switch (available && biometryType) {
  //       case BiometryTypes.TouchID:
  //         setTypeTouchID('TouchID');
  //         break;
  //       case BiometryTypes.FaceID:
  //         setTypeTouchID('FaceID');
  //         break;
  //       case BiometryTypes.Biometrics:
  //         setTypeTouchID('Biometrics');
  //         break;
  //       default:
  //         setTypeTouchID('');
  //         break;
  //     }
  //   });
  // };

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

    <View onTouchMove={Keyboard.dismiss}>
        <KeyboardAvoidingView>

              <View>
                <View style={{height:100}}>
                  <Image style={{alignSelf: 'center',height:100,width:80,marginTop:60}} source={require('../../Assets/Images/4.png')}/>
                </View>
      <View>
        <Text style={{fontSize:50,marginTop:50,marginLeft:Dimensions.get('window').width*0.05,color:'rgba(20, 57, 128, 1)'}}>
          {t('sign_in.sign_in')}
        </Text>
        <View>
          <Text style={{marginTop: 20,fontSize:18,marginLeft:Dimensions.get('window').width*0.05,color:'rgba(20, 57, 128, 1)'}}>
            {t('sign_in.username')}
          </Text>
          <View style={{position: 'relative',
        alignItems: 'center',
        marginBottom:8,}}>
            <TextInput 
            
              value={account.username}
              onChangeText={(username: string) =>
                onSetAccount('username', username)
              }
              placeholder={t('sign_in.username')}
              placeholderTextColor={'grey'}
              style={styles.input}
            />
          </View>
        </View>
        <View>
        </View>

          <Text style={{marginTop: 20,fontSize:18,marginLeft:Dimensions.get('window').width*0.05,color:'rgba(20, 57, 128, 1)'}}>
            {t('sign_in.password')}
          </Text>
          <View style={{position: 'relative',
        alignItems: 'center',
        marginBottom:8,}}>
            <TextInput
              value={account.password}
              onChangeText={(password: string) =>
                onSetAccount('password', password)
              }
              placeholder={t('sign_in.password')}
              placeholderTextColor={'grey'}
              secureTextEntry
              style={styles.input}
            />
         
        </View>
</View>
        <TouchableOpacity style={{marginTop: 20,width:Dimensions.get('window').width*0.5,height:50,borderWidth:1,backgroundColor:'rgba(20, 57, 128, 1)',alignSelf:'center',borderRadius:20,alignItems:'center'}}
          onPress={() =>{login(account)}}
>
          <Text  style={{fontSize:15,color:'white',marginTop:9}}>
            {t('sign_in.sign_in')}
          </Text>
        </TouchableOpacity>
        
        <Text style={{fontSize:15,color:'rgba(20, 57, 128, 1)',marginTop:9,alignSelf:'center'}}>
            or
          </Text>
        <Text style={{fontSize:15,color:'rgba(20, 57, 128, 1)',marginTop:9,alignSelf:'center'}}>
            {t('sign_in.sign_in_bio')}
          </Text>
        <TouchableOpacity style={{width:40,height:40,alignSelf:'center',marginTop:20}}
           onPress={() => {
            handleBiometric();
          }}
>
          <Image style={{width:40,height:40,alignSelf:'center',marginTop:20}} source={require('../../Assets/Images/Union.png')}/>
        </TouchableOpacity>
      </View>
        </KeyboardAvoidingView>
    </View>


  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingHorizontal: 16,
    height: 50,
    backgroundColor:'white',
    width: Dimensions.get('window').width*0.9,
    borderRadius:20,
    borderWidth:1,
    borderColor:'rgba(20, 57, 128, 1)' 
  },
});
function setTypeTouchID(arg0: string) {
  throw new Error('Function not implemented.');
}

