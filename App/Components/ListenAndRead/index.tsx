import {Dimensions, StyleSheet, Text, View} from 'react-native';
import { Colors } from "react-native-ui-lib";

interface props {
  content: string[];
}

export default function ListenAndRead(props: props) {
  return (
    <View style={styles.container}>
      <View>
        {props.content.map((item, index) => (
          <Text style={styles.textStyle} key={index}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get('window').width * 0.5,
  },
  textStyle: {
    fontFamily: 'Poppins-Italic',
    color: Colors.text
  },
});
