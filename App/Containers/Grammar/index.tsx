import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions, Image, ScrollView, StyleSheet} from 'react-native';
import HeaderChat from 'Components/Commons/HeaderChat';
import ComponentOnpressShowList from 'Components/ComponentOnpressShowList';
import MOCK_DATA from 'Utils/Mock';
import {Colors} from 'react-native-ui-lib';

export default function Grammar({navigation}: any) {
  const VocaN3_1 = MOCK_DATA.VocaN3_1;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderChat navigation={navigation} screenBack={'TabNavigation'} />
      <Image
        style={styles.logo}
        source={require('../../Assets/Images/13610-logos_black.png')}
      />
      <ScrollView>
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (1-40)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (41-80)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (81-120)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (121-160)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (161-200)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (201-240)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (241-280)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (281-320)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (321-360)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (361-400)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (401-440)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (441-480)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (481-520)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (521-560)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (561-600)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (601-640)'}
        />
        <ComponentOnpressShowList
          Voca_N3_1={VocaN3_1}
          name={'Ngữ Pháp N3 mimikara (641-680)'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f9f4f4'},
  logo: {height: 200, width: Dimensions.get('window').width * 0.9,alignSelf: "center"},
  textBody: {
    color: Colors.text,
  },
});
