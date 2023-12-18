import {Dimensions, StyleSheet,TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import { Text} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'Store/reduxProvider';
import { Colors } from 'react-native-ui-lib';

interface SideMenu {
    visible: boolean;
    onDismis: () => void;
    navigation?: any;
    onShowSetting?: () => void;
  }


  const SideMenu = (props: SideMenu) => {

    const username = useSelector((state: RootState)=> state.auth.user?.username,

    )

    return (
        <Modal
            isVisible={props.visible}
            onBackdropPress={props.onDismis}
            style={styles.modalContainer}
            animationIn={'fadeInLeft'}
            animationOut={'fadeOutLeft'}
            backdropOpacity={0.6}>
            <View style={styles.container}>
                <View style={styles.viewLine}>
                    <Text style={styles.textHello}>
                        Xin chào {username}
                    </Text>
                </View>
                <TouchableOpacity style={styles.viewLine}>
                    <Text style={styles.textPress}>
                        Đăng xuất
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewLine}>
                    <Text style={styles.textPress}>
                        Cài đặt
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewLine}>
                    <Text style={styles.textPress}>
                        Thêm Thông tin
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewLine}>
                    <Text style={styles.textPress}>
                        phiên bản
                    </Text>
                </TouchableOpacity>

            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    modalContainer: {
        // height : Dimensions.get("screen").height*0.8,
        // width : Dimensions.get("screen").width*0.7,
    },
    container : {
        height : Dimensions.get("screen").height*0.85,
        width : Dimensions.get("screen").width*0.7,
        backgroundColor : "#f9f4f4",
        marginTop: 60,
        marginRight: 70,
        marginLeft: 18,
        borderRadius: 16,
        marginBottom: 24,

    },
    textHello: {
        fontFamily: 'Poppins-Medium',
        color: Colors.text,
        fontSize: 20,
        alignSelf: "center",
        marginTop: 8
      },
    viewLine:{
        height: 50,
        backgroundColor: '#f9f4f4',

    },textPress: {
        fontFamily: 'Poppins-Medium',
        color: Colors.text,
        fontSize: 15,
        marginLeft:20,
        marginTop: 8
      },
})
export default SideMenu;
