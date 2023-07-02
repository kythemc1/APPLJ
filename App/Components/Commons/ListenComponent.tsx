import {Image, StyleSheet, Text, View} from 'react-native';

interface props {
  linkImg: string;
  name: string;
  color: string;
  navigation: any;
}
export default function ListenComponent(props: props) {
  return (
    <View style={{...styles.container, backgroundColor: props.color}}>
      <Image
        style={styles.imgRadio}
        source={require('../../Assets/Images/radio.png')}
      />
      <Text style={styles.textName}>{props.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    elevation: 5, // Thuộc tính sử dụng để tạo bóng (áp dụng cho Android)
    shadowColor: '#000', // Màu của bóng (áp dụng cho iOS)
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, // Độ mờ của bóng (áp dụng cho iOS)
    shadowRadius: 4, // Độ rộng của bóng (áp dụng cho iOS),
    borderRadius: 20,
  },
  imgRadio: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  textName: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
});
