import {View, Text} from 'react-native-ui-lib';
import React from 'react';
import './App/Configs';
import {Provider} from 'react-redux';
import {store, persistor} from './App/Store/reduxProvider';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClientProvider} from 'react-query';
import queryClient from './App/Services/QueryClient';
import RNBootSplash from 'react-native-bootsplash';
import AppNavigation from './App/Navigations/AppNavigation';
import {setDefaultHeaders} from './App/Services/Axios';
export default function App() {
  const Loading = () => <View></View>;

  const restoreToken = async () => {
    const {auth} = await store.getState().auth;
    if (auth.isLogged) {
      //@ts-ignore
      setDefaultHeaders({
        Authorization: `${auth.type} ${auth.token}`,
      });
    }
  };

  const onBeforeLift = () => {
    restoreToken();
    RNBootSplash.hide();
  };

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate
          persistor={persistor}
          loading={<Loading />}
          onBeforeLift={onBeforeLift}>
          <AppNavigation />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  );
}
