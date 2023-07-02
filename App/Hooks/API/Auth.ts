import {API} from '../../Configs/Constants/API';
import {QUERY_KEY} from '../../Configs/Constants/QueryKeys';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import Axios from '../../Services/Axios';
import {logout, setUser} from '../../Store/Reducers/authSlice';
import {store} from '../../Store/reduxProvider';
import {useDebouncedCallback} from 'use-debounce';
import Navigator from '../../Utils/Navigator';

const fetchAccount = async () => {
  const {data} = await Axios({
    method: 'get',
    url: API.AUTH.ACCOUNT,
  });
  return data.data;
};

export const useAccount = () =>
  useMutation(() => fetchAccount(), {
    onSuccess: data => {
      store.dispatch(setUser(data));
    },
    onError: error => {
      console.log(error);
    },
    mutationKey: [QUERY_KEY.AUTH.ACCOUNT],
  });


export const useAuth = () => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState<{
    username: string;
    password: string;
  }>({
    username: '',
    password: '',
  });

  const onSetAccount = (field: 'username' | 'password', value: string) => {
    setAccount({
      ...account,
      [field]: value,
    });
  };

  const onLogout = () => {
    dispatch(logout());
    Navigator.reset('SignIn');
  };

  const login=useDebouncedCallback(
    async ({ username, password }: { username: string; password: string }) => {
      if(username==='Admin' && password ==='A')
      Navigator.reset('TabNavigation');
    }
  )
  return {
    account,
    onSetAccount,
    onLogout,
    login
  };
};
