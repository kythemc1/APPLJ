import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from 'Components/Commons/Header/Header';
export default function Ask({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Image
        style={styles.logo}
        source={require('../../Assets/Images/13610-logos_black.png')}
      />

      <View style={styles.viewVoca}>
        <Image
          style={styles.icon_grammar}
          source={require('../../Assets/Images/icon-grammar.png')}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Grammar');
          }}
          style={styles.viewText}>
          <Text style={styles.textOn}>Ngữ pháp</Text>
          <Text style={styles.textOn}>Mimikara Oboeru</Text>
          <Image
            style={styles.iconRight}
            source={require('../../Assets/Images/right-arrow.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.viewVoca}>
        <Image
          style={styles.icon_grammar}
          source={require('../../Assets/Images/icon-grammar.png')}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Vocabulary');
          }}
          style={styles.viewText}>
          <Text style={styles.textOn}>Từ Vựng N3</Text>
          <Text style={styles.textOn}>Mimikara Oboeru</Text>
          <Image
            style={styles.iconRight}
            source={require('../../Assets/Images/right-arrow.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f9f4f4'},
  logo: {height: 200, width: Dimensions.get('window').width * 0.9,alignSelf: "center"},
  textIntro: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
  viewVoca: {
    height: 200,
    backgroundColor: '#2a4d69',
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: 30,
  },
  icon_grammar: {
    height: 200,
    width: 200,
  },
  textOn: {
    fontFamily: 'Poppins-ExtraBold',
    color: 'white',
    textAlign: 'center',
  },
  viewText: {
    marginTop: 70,
  },
  iconRight: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});
