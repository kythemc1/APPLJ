import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-ui-lib';

interface props {
  // onPressShow: () => void;

  state: {Kanji: string; Hiragana: string; Meaning: string};
}

export default function (props: props) {
  // const [showInfo, SetShowInfo] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 20}}>
        <Text style={styles.text}>{props.state?.Kanji}</Text>
        <View style={{flexDirection: 'row', marginTop: 4}}>
          <Text style={styles.textHira}>{props.state?.Hiragana}</Text>
          <Text style={styles.text}>{props.state?.Meaning}</Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: Dimensions.get('window').width * 0.9,
          backgroundColor: 'grey',
          alignSelf: 'center',
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    // padding :10,
    paddingBottom: 5,
    paddingTop: 5,
    // borderWidth: 1,
    // borderColor: Colors.text
  },
  text: {
    color: Colors.text,
  },
  textHira: {
    color: Colors.text,
    width: Dimensions.get('window').width * 0.45,
  },
});
