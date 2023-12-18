import Header from 'Components/Commons/Header/Header';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native-ui-lib';
import ListenComponent from "Components/Commons/ListenComponent";

export default function Listen({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View
          style={{
            width: Dimensions.get('window').width * 0.9,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text style={styles.textIntro}>
            Thành công không đến từ sự ngẫu nhiên, mà từ công sức và quyết tâm
            học tập
          </Text>
          <Text style={styles.textIntro}>- Carmax không nói câu này -</Text>
        </View>
        {/*<LevelContainer linkImg={'../../Assets/Images/radio.png'} navigation={navigation} srcPressN1={"ListenDetails"} />*/}
      <View style={styles.viewCourse}>
        <TouchableOpacity
            onPress={() => {

              navigation.navigate('ListenListVideo',{level: 'N5'});
            }}>
          <ListenComponent
              linkImg={'../../Assets/Images/radio.png'}
              name={'JLPT N5'}
              color={'#2a4d69'}
              navigation={navigation}
          />
        </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {

                  navigation.navigate('ListenListVideo', {level : 'N4'});
              }}>
              <ListenComponent
                  linkImg={'../../Assets/Images/radio.png'}
                  name={'JLPT N4'}
                  color={'#2a4d69'}
                  navigation={navigation}
              />
          </TouchableOpacity>

      </View>
        <View style={styles.viewCourse}>
            <TouchableOpacity
                onPress={() => {

                    navigation.navigate('ListenListVideo',{level: 'N3'});
                }}>
                <ListenComponent
                    linkImg={'../../Assets/Images/radio.png'}
                    name={'JLPT N3'}
                    color={'#2a4d69'}
                    navigation={navigation}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {

                    navigation.navigate('ListenListVideo', {level : 'N2'});
                }}>
                <ListenComponent
                    linkImg={'../../Assets/Images/radio.png'}
                    name={'JLPT N2'}
                    color={'#2a4d69'}
                    navigation={navigation}
                />
            </TouchableOpacity>

        </View>
        <View style={styles.viewCourse}>
            <TouchableOpacity
                onPress={() => {

                    navigation.navigate('ListenListVideo', {level : 'N1'});
                }}>
                <ListenComponent
                    linkImg={'../../Assets/Images/radio.png'}
                    name={'JLPT N1'}
                    color={'#2a4d69'}
                    navigation={navigation}
                />
            </TouchableOpacity>


        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f4f4',
    flex: 1,
  },
  imgRadio: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  viewRadio: {
    backgroundColor: '#a8e6cf',
    height: 300,
    width: 300,
  },
  viewCourse: {
    width: Dimensions.get('window').width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 30,
  },
  textIntro: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center',
    color: Colors.text,
  },
});
