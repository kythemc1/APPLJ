import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderChat from 'Components/Commons/HeaderChat';
import ComponentOnpressShowList from 'Components/ComponentOnpressShowList';
import MOCK_DATA from 'Utils/Mock';
import {Colors} from 'react-native-ui-lib';

export default function OptionVocaCard({navigation}: any) {
  const VocaN3_1 = MOCK_DATA.VocaN3_1;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHead}>Mimikara N3.1 (1-40)</Text>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <TouchableOpacity>
          <Text style={styles.textBody}>TỪ Vựng</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textBody}>Luyện tập</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f4f4',
    width: Dimensions.get('window').width * 0.9,
    alignSelf: "center",
    height: 80,
    borderWidth: 1,
    borderColor: Colors.text,
    borderRadius: 20
  },
  logo: {height: 200, width: Dimensions.get('window').width * 0.9},
  textBody: {
    color: Colors.text,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  textHead: {
    color: Colors.text,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center'
  },
});
