import Header from 'Components/Commons/Header/Header';
import React, {useRef, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import YouTubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import ListenAndRead from 'Components/ListenAndRead/index';
import {Colors} from 'react-native-ui-lib';
import HeaderChat from "Components/Commons/HeaderChat";
const mokData = {
  VideoId: '0zTjrsIWrC4',
  Name: 'Bạn có tài mà',
  level: 5,
  onStart: [
    {
      time: 0,
      content: [
        '―失礼ですが、お名前は？',
        '－イ―です',
        '－イさんですか',
        '－いいえ、－イですか',
      ],
    },
    {
      time: 9,
      content: [
        '―失礼ですが、お名前は？',
        '－イ―です',
        '－イさんですか',
        '－いいえ、－イですか',
      ],
    },
    {
      time: 19,
      content: [
        '―失礼ですが、お名前は？',
        '－イ―です',
        '－イさんですか',
        '－いいえ、－イですか',
      ],
    },
    {
      time: 32,
      content: [
        '―失礼ですが、お名前は？',
        '－イ―です',
        '－イさんですか',
        '－いいえ、－イですか',
      ],
    },
    {
      time: 44,
      content: [
        '―失礼ですが、お名前は？',
        '－イ―です',
        '－イさんですか',
        '－いいえ、－イですか',
      ],
    },
    {
      time: 59,
      content: [
        '―失礼ですが、お名前は？',
        '－イ―です',
        '－イさんですか',
        '－いいえ、－イですか',
      ],
    },
    {
      time: 73,
      content: [
        '―失礼ですが、お名前は？',
        '－イ―です',
        '－イさんですか',
        '－いいえ、－イですか',
      ],
    },
    {
      time: 87,
      content: [
        '―失礼ですが、お名前は？',
        '－イ―です',
        '－イさんですか',
        '－いいえ、－イですか',
      ],
    },
    {
      time: 69,
      content: [
        '―失礼ですが、お名前は？',
        '－イ―です',
        '－イさんですか',
        '－いいえ、－イですか',
      ],
    },
    {
      time: 79,
      content: [
        '―失礼ですが、お名前は？',
        '－イ―です',
        '－イさんですか',
        '－いいえ、－イですか',
      ],
    },
  ],
};

export default function ListenDetails({navigation}: any) {
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  const playerRef = useRef<YoutubeIframeRef>(null);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderChat navigation={navigation} screenBack={'TabNavigation'} />
      <YouTubePlayer
        play={playing}
        videoId="0zTjrsIWrC4"
        height={250}
        width={Dimensions.get('window').width * 1}
        onChangeState={onStateChange}
        ref={playerRef}
      />
      <TouchableOpacity style={styles.buttonPause} onPress={togglePlaying}>
        <Text style={styles.textPause}>Play / Pause</Text>
      </TouchableOpacity>
      <ScrollView>
        {mokData.onStart.map((items, index) => (
          <View style={styles.viewDetails} key={index}>
            <TouchableOpacity
              style={styles.buttonUnder}
              onPress={() => {
                playerRef.current?.seekTo(items.time, true);
              }}>
              <Text style={styles.textBtn}>Start : {items.time}</Text>
            </TouchableOpacity>
            <ListenAndRead content={items.content} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f4f4',
    flex: 1,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textPause: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 9,
    fontFamily: 'Poppins-Medium',
  },
  textBtn: {
    color: Colors.text,
    alignSelf: 'center',
    marginTop: 9,
    fontFamily: 'Poppins-Medium',
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
  buttonBig: {
    height: 40,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#143980',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 0,
  },
  buttonPause: {
    height: 40,
    width: 100,
    backgroundColor: '#2a4d69',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 0,
  },
  buttonUnder: {
    height: 40,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#143980',
    borderWidth: 1,
  },
  viewDetails: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'space-between',
    marginLeft: Dimensions.get('window').width * 0.05,
    marginTop: 30,
  },
});
