import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Image} from 'react-native';
import {Colors} from 'react-native-ui-lib';

interface props {
  screenBack: string;
  navigation: any;
}
const HeaderChat = (props: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHead}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(`${props.screenBack}`);
          }}
          style={styles.viewText}>
          <Image
            source={require('../../../Assets/Images/ion-back.png')}
            style={{height: 25, width: 25, marginTop: 15}}
          />
        </TouchableOpacity>
        <Image
          source={require('../../../Assets/Images/3.jpg')}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgCl,
    alignItems: 'center',
    elevation: 5, // Thuộc tính sử dụng để tạo bóng (áp dụng cho Android)
    shadowColor: '#000', // Màu của bóng (áp dụng cho iOS)
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, // Độ mờ của bóng (áp dụng cho iOS)
    shadowRadius: 4, // Độ rộng của bóng (áp dụng cho iOS)
    paddingBottom: 5,
  },
  textHello: {
    fontFamily: 'Poppins-Medium',
    color: Colors.text,
    fontSize: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 90,
    marginTop: 3,
  },
  textWelcome: {
    fontFamily: 'Poppins-Regular',
    color: Colors.text,
    fontSize: 10,
  },
  viewHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
  },
  viewText: {},
});
export default HeaderChat;
