import {Assets} from 'react-native-ui-lib';

Assets.loadAssetsGroup('icons', {});

Assets.loadAssetsGroup('tabs', {
  ask: require('../../Assets/Tabs/ask.png'),
  listen: require('../../Assets/Tabs/listen.png'),
  vag: require('../../Assets/Tabs/book.png'),
  more: require('../../Assets/Tabs/more.png'),
});
