import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, Image, View, Text} from 'react-native-ui-lib';
import Ask from '../Containers/Home';

import More from '../Containers/More';
import {useTranslation} from 'react-i18next';
import Listen from 'Containers/Listen/index';
import VAG from '../Containers/Chart';
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
      case 'VAG':
        return t('tabs.vag');
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
          tintColor={focused ? '#fe8a71':Colors.text }
        />
        {/*<Text marginT-xss text-grey10={focused} text-grey7={!focused}>*/}
        {/*  {getRouteName(route.name)}*/}
        {/*</Text>*/}
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
          backgroundColor: Colors.bgCl,
          borderRadius: 50,
        },
        tabBarIcon: ({focused}) => renderIcon(route, focused),
      })}>
      <Tab.Screen name={'Ask'} component={Ask} />
      <Tab.Screen name={'Listen'} component={Listen} />
      <Tab.Screen name={'VAG'} component={VAG} />
      <Tab.Screen name={'More'} component={More} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
