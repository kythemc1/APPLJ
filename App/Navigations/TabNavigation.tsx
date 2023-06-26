import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, Image, View, Text} from 'react-native-ui-lib';
import Ask from '../Containers/Home';

import Dic from '../Containers/Chart';
import More from '../Containers/More';
import {useTranslation} from 'react-i18next';
import Listen from 'Containers/Listen/index';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const {bottom} = useSafeAreaInsets();
  const {t} = useTranslation();

  // useAccount();

  const getRouteName = (routeName: string) => {
    switch (routeName) {
      case 'Ask':
        return t('tabs.ask');
      case 'Listen':
        return t('tabs.listen');
      case 'Dic':
        return t('tabs.dic');
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
          backgroundColor: Colors.bgCl
        },
        tabBarIcon: ({focused}) => renderIcon(route, focused),
      })}>
      <Tab.Screen name={'Ask'} component={Ask} />
      <Tab.Screen name={'Listen'} component={Listen} />
      <Tab.Screen name={'Dic'} component={Dic} />
      <Tab.Screen name={'More'} component={More} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
