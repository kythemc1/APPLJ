import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, Image, View, Text} from 'react-native-ui-lib';
import Ask from '../Containers/Home';

import More from '../Containers/More';
import {useTranslation} from 'react-i18next';
import Listen from 'Containers/Listen/index';
import {StyleSheet, TouchableOpacity} from "react-native";
import Grammar from "Containers/Grammar";
import Vocabulary from "Containers/Vocabulary";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const {bottom} = useSafeAreaInsets();

    const _renderIcon = (routeName: string, focused: any) => {
        let icon;
        let nameTab = '';
        switch (routeName) {
            case 'Ask':
                icon = require('../../App/Assets/Tabs/ask.png');
                nameTab = 'Ask';
                break;
            case 'Listen':
                icon = require('../../App/Assets/Tabs/ear.png');
                nameTab = `Listen`;
                break;
            case 'Grammar':
                icon = require('../../App/Assets/Tabs/grammar.png');
                nameTab = `Grammar`;
                break;
            case 'Vocabulary':
                icon = require('../../App/Assets/Tabs/book.png');
                nameTab = `Vocabulary`;
                break;
            case 'More':
                icon = require('../../App/Assets/Tabs/more.png');
                nameTab = `More`;
                break;
        }

        return (
            <View style={styles.tabBarItem}>
                <Image
                    source={icon}
                    style={[
                        styles.img,
                        {
                            tintColor:
                                routeName === focused
                                    ? '#fff'
                                    : '#011f4b',
                        },
                    ]}
                />
            </View>
        );
    };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
          tabBarActiveTintColor: '#011f4b',
          tabBarInactiveTintColor: '#555',
        tabBarStyle: {
          height: bottom + 72,
          backgroundColor: '#fff',
          borderRadius: 50,
        },
        tabBarIcon: ({focused}) => _renderIcon(route.name , focused),

      })}>
        <Tab.Screen name={'Ask'} component={Ask} />
        <Tab.Screen name={'Listen'} component={Listen} />
        <Tab.Screen name={'Grammar'} component={Grammar} />
        <Tab.Screen name={'Vocabulary'} component={Vocabulary} />
        <Tab.Screen name={'More'} component={More} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
export const styles = StyleSheet.create({

    tabBarItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 25,
        height: 25,
    },


});
