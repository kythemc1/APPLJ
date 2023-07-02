import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import callGoogleVisionAsync from './GoogleVison';
import {Colors} from 'react-native-ui-lib';
import HeaderChat from 'Components/Commons/HeaderChat';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f9f4f4'},
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    marginVertical: 40,
    color: Colors.text,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    color: Colors.text,
  },
  languagetitle: {
    fontSize: 30,
    marginVertical: 10,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 75,
  },
  button: {
    backgroundColor: '#47477b',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
  },
});

export default function ScanImage({navigation}: any) {
  const [language, setLanguage] = useState(null);
  const [subtitle, setSubtitle] = useState(null);
  const [loading, SetLoading] = useState(false);

  async function SelectPhoto() {
    SetLoading(true);
    const options = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);
    if (result.assets === undefined) {
      // Some error log it as toast , you an parse the error to be more specific . Refer the docs
      ToastAndroid.showWithGravity(
        'Could not pick an image',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      SetLoading(false);
    } else {
      // convert to base64
      RNFS.readFile(result.assets[0].uri, 'base64')
        .then(res => {
          callGoogleVisionAsync(res)
            .then(data => {
              var text = '';
              var locale = null;
              data.responses.forEach(response => {
                response.textAnnotations.forEach(textAnnotation => {
                  text = text + ' ' + textAnnotation.description;
                  if (locale === null) {
                    locale = textAnnotation.locale;
                  }
                });
              });

              setLanguage(locale);
              setSubtitle(text);
              SetLoading(false);
            })
            .catch(error => {
              ToastAndroid.showWithGravity(
                'Error',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
              SetLoading(false);
            });
        })
        .catch(error => {
          ToastAndroid.showWithGravity(
            'Could convert image to base64',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
          SetLoading(false);
        });
    }
  }

  return (
    <SafeAreaView contentContainerStyle={styles.container}>
      <HeaderChat  navigation={navigation} screenBack={'TabNavigation'}/>
      <Text style={styles.title}>Scan Image</Text>
      <Text style={styles.subtitle}>
        Get the text from a document's image after scanning it
      </Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={SelectPhoto}>
          <Text style={styles.buttonText}>Pick a Photo</Text>
        </TouchableOpacity>
        {loading === false ? (
          subtitle !== null ? (
            <View>
              <Text style={styles.languagetitle}>{language}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          ) : (
            <></>
          )
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    </SafeAreaView>
  );
}
