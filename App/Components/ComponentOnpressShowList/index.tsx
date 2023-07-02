import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RenderListTuVung from 'Components/RenderListTuVung';
import React, {useState} from 'react';
import {Colors} from 'react-native-ui-lib';
interface props {
  Voca_N3_1: {Kanji: string; Hiragana: string; Meaning: string}[];
  name: string;
}
export default function ComponentOnpressShowList(props: props) {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.pressShow}
        onPress={() => {
          setShow(!show);
        }}>
        <Text style={styles.textTittle}>{props.name}</Text>
      </TouchableOpacity>

      <View>
        {show ? (
          <View>
            <TouchableOpacity>
              <Text style={styles.textTittle}> ☛ ☞ Luyện tập với flash card</Text>
            </TouchableOpacity>
            {props.Voca_N3_1.map((items, index) => (
              <RenderListTuVung key={index} state={items} />
            ))}
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 20
  },
  textTittle: {
    color: Colors.text,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  pressShow: {
    padding: 10,
  },
});
