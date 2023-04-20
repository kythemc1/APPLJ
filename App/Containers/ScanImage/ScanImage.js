import React,{useState} from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity,ToastAndroid,ActivityIndicator} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import callGoogleVisionAsync from './GoogleVison';


const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    padding : 20
  },
  title: {
    fontSize: 35,
    marginVertical: 40,
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 10,
    textAlign:'center'
  },
  languagetitle: {
    fontSize: 30,
    marginVertical: 10,
    textAlign:'center'  
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 75
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


export default function ScanImage() {
  const [language, setLanguage] = useState(null);
  const [subtitle, setSubtitle] = useState(null);
  const [loading, SetLoading] = useState(false);

  async function SelectPhoto(){
    SetLoading(true)
    const options = {
      mediaType:'photo'
    }
    const result = await launchImageLibrary(options)
    if(result.assets===undefined){
      // Some error log it as toast , you an parse the error to be more specific . Refer the docs
      ToastAndroid.showWithGravity(
        'Could not pick an image',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      SetLoading(false)
    }else{
      // convert to base64
      RNFS.readFile(result.assets[0].uri, 'base64')
      .then(res =>{
        callGoogleVisionAsync(res).then((data)=>{
          var text = ""
          var locale = null
          data.responses.forEach((response)=>{
            response.textAnnotations.forEach((textAnnotation)=>{
              text = text +" "+ textAnnotation.description;
              if(locale===null){
                locale = textAnnotation.locale
              }
            })
          })

          setLanguage(locale)
          setSubtitle(text)
          SetLoading(false)
        }).catch((error)=>{
          ToastAndroid.showWithGravity(
            'Error',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
          SetLoading(false)
        })
      }).catch((error)=>{
        ToastAndroid.showWithGravity(
          'Could convert image to base64',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        SetLoading(false)
      });
    }
  }
  
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.title}>OCR App</Text>
      <Text style={styles.subtitle}>Get the text from a document's image after scanning it</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={SelectPhoto}>
        <Text style={styles.buttonText}>Pick a Photo</Text>
        </TouchableOpacity>
          {
            (loading===false)?
             (subtitle!==null)?
                <View>
                  <Text style={styles.languagetitle}>{language}</Text>
                  <Text style={styles.subtitle}>{subtitle}</Text>
                </View>:<></>
              :<ActivityIndicator size="large" />
            
          }
      </View>
  </ScrollView>
  );
}