import {Assets} from 'react-native-ui-lib';

Assets.loadAssetsGroup('icons', {});

Assets.loadAssetsGroup('tabs', {
  home: require('../../Assets/Tabs/home.png'),
  transfer: require('../../Assets/Tabs/transfer.png'),
  chart: require('../../Assets/Tabs/chart.png'),
  more: require('../../Assets/Tabs/more.png'),
});
