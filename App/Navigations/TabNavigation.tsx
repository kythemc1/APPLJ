import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, Image, View, Text} from 'react-native-ui-lib';
import Home from '../Containers/Home';
import Transfer from '../Containers/Transfer';
import Chart from '../Containers/Chart';
import More from '../Containers/More';
import {useTranslation} from 'react-i18next';
import {useAccount} from '../Hooks/API/Auth';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const {bottom} = useSafeAreaInsets();
  const {t} = useTranslation();

  useAccount();

  const getRouteName = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        return t('tabs.home');
      case 'Transfer':
        return t('tabs.transfer');
      case 'Chart':
        return t('tabs.chart');
      case 'More':
        return t('tabs.more');
      default:
        return '';
    }
  };

  const renderIcon = (route: any, focused: any) => {
    return (
      <View center>
        <Image
          assetGroup={'tabs'}
          assetName={route.name.toLowerCase()}
          medium
          tintColor={focused ? Colors.primary5 : '#818181'}
        />
        <Text marginT-xss text-grey10={focused} text-grey7={!focused}>
          {getRouteName(route.name)}
        </Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: bottom + 72,
        },
        tabBarIcon: ({focused}) => renderIcon(route, focused),
      })}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Transfer'} component={Transfer} />
      <Tab.Screen name={'Chart'} component={Chart} />
      <Tab.Screen name={'More'} component={More} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
