import Header from 'Components/Commons/Header/Header';
import React, { useRef, useState,useCallback } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert, Button, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YouTubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';

export default function Listen (){
  const [playing, setPlaying] = useState(false);
  // const handleSeekTo = () => {
  //   console.log('tua ....');
    
  //   playerRef.current?.setCurrentTime(30); 
  // };
  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const playerRef = useRef<YoutubeIframeRef>(null);
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <YouTubePlayer
          play={playing}
          videoId= '0zTjrsIWrC4'
          height={230}
          width={Dimensions.get('window').width*1}
          onChangeState={onStateChange}
          ref={playerRef}
        />
        <TouchableOpacity style={styles.buttonBig} onPress={togglePlaying}>
            <Text style={styles.textBtn}>
              Play / Pause
            </Text>
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.viewDetails}>
            <TouchableOpacity style={styles.buttonUnder}  onPress={() => {
                playerRef.current?.seekTo(9,true)
                }}>
                <Text style={styles.textBtn}>
                  Start
                </Text>
            </TouchableOpacity>
            <View>
               <Text>
              ―失礼ですが、お名前は？
            </Text>
            <Text>
             －イ―です
            </Text>
            <Text>
             －イさんですか
            </Text>
            <Text>
            －いいえ、－イですか
            </Text>
            </View>
           
          </View>
          <View style={styles.viewDetails}>
            <TouchableOpacity style={styles.buttonUnder}  onPress={() => {
                playerRef.current?.seekTo(19,true)
                }}>
                <Text style={styles.textBtn}>
                  Start
                </Text>
            </TouchableOpacity>
            <View>
               <Text>
              ―失礼ですが、お名前は？
            </Text>
            <Text>
             －イ―です
            </Text>
            <Text>
             －イさんですか
            </Text>
            <Text>
            －いいえ、－イですか
            </Text>
            </View>
          </View>
          <View style={styles.viewDetails}>
            <TouchableOpacity style={styles.buttonUnder}  onPress={() => {
                playerRef.current?.seekTo(32,true)
                }}>
                <Text style={styles.textBtn}>
                  Start
                </Text>
            </TouchableOpacity>
            <View>
               <Text>
              ―失礼ですが、お名前は？
            </Text>
            <Text>
             －イ―です
            </Text>
            <Text>
             －イさんですか
            </Text>
            <Text>
            －いいえ、－イですか
            </Text>
            </View>
          </View>
          <View style={styles.viewDetails}>
            <TouchableOpacity style={styles.buttonUnder}  onPress={() => {
                playerRef.current?.seekTo(44,true)
                }}>
                <Text style={styles.textBtn}>
                  Start
                </Text>
            </TouchableOpacity>
            <View>
               <Text>
              ―失礼ですが、お名前は？
            </Text>
            <Text>
             －イ―です
            </Text>
            <Text>
             －イさんですか
            </Text>
            <Text>
            －いいえ、－イですか
            </Text>
            </View>
          </View>
          <View style={styles.viewDetails}>
            <TouchableOpacity style={styles.buttonUnder}  onPress={() => {
                playerRef.current?.seekTo(59,true)
                }}>
                <Text style={styles.textBtn}>
                  Start
                </Text>
            </TouchableOpacity>
            <View>
               <Text>
              ―失礼ですが、お名前は？
            </Text>
            <Text>
             －イ―です
            </Text>
            <Text>
             －イさんですか
            </Text>
            <Text>
            －いいえ、－イですか
            </Text>
            </View>
          </View>
          <View style={styles.viewDetails}>
            <TouchableOpacity style={styles.buttonUnder}  onPress={() => {
                playerRef.current?.seekTo(73,true)
                }}>
                <Text style={styles.textBtn}>
                  Start
                </Text>
            </TouchableOpacity>
            <View>
               <Text>
              ―失礼ですが、お名前は？
            </Text>
            <Text>
             －イ―です
            </Text>
            <Text>
             －イさんですか
            </Text>
            <Text>
            －いいえ、－イですか
            </Text>
            </View>
          </View>
          <View style={styles.viewDetails}>
            <TouchableOpacity style={styles.buttonUnder}  onPress={() => {
                playerRef.current?.seekTo(87,true)
                }}>
                <Text style={styles.textBtn}>
                  Start
                </Text>
            </TouchableOpacity>
            <View>
               <Text>
              ―失礼ですが、お名前は？
            </Text>
            <Text>
             －イ―です
            </Text>
            <Text>
             －イさんですか
            </Text>
            <Text>
            －いいえ、－イですか
            </Text>
            </View>
          </View>
          <View style={styles.viewDetails}>
            <TouchableOpacity style={styles.buttonUnder}  onPress={() => {
                playerRef.current?.seekTo(46,true)
                }}>
                <Text style={styles.textBtn}>
                  Start
                </Text>
            </TouchableOpacity>
            <View>
               <Text>
              ―失礼ですが、お名前は？
            </Text>
            <Text>
             －イ―です
            </Text>
            <Text>
             －イさんですか
            </Text>
            <Text>
            －いいえ、－イですか
            </Text>
            </View>
          </View>
          <View style={styles.viewDetails}>
            <TouchableOpacity style={styles.buttonUnder}  onPress={() => {
                playerRef.current?.seekTo( 122,true)
                }}>
                <Text style={styles.textBtn}>
                  Start
                </Text>
            </TouchableOpacity>
            <View>
               <Text>
              ―失礼ですが、お名前は？
            </Text>
            <Text>
             －イ―です
            </Text>
            <Text>
             －イさんですか
            </Text>
            <Text>
            －いいえ、－イですか
            </Text>
            </View>
          </View>
          <View style={styles.viewDetails}>
            <TouchableOpacity style={styles.buttonUnder}  onPress={() => {
                playerRef.current?.seekTo(9,true)
                }}>
                <Text style={styles.textBtn}>
                  Start
                </Text>
            </TouchableOpacity>
            <View>
               <Text>
              ―失礼ですが、お名前は？
            </Text>
            <Text>
             －イ―です
            </Text>
            <Text>
             －イさんですか
            </Text>
            <Text>
            －いいえ、－イですか
            </Text>
            </View>
          </View>
        </ScrollView>
       
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textBtn:{
    color: '#143980',
    alignSelf: 'center',
    marginTop:9
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  buttonBig:{
    height:40,
    width:100,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#143980',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 30
  },
  buttonUnder:{
    height:40,
    width:100,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#143980',
    borderWidth: 1,
  },
  viewDetails:{
    flexDirection: 'row',
    width: Dimensions.get('window').width*0.9,
    justifyContent: 'space-between',
    marginLeft: Dimensions.get('window').width*0.05,
    marginTop: 30
  }
});