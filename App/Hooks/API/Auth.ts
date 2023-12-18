import {API} from '../../Configs/Constants/API';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {logout, setAuth, setUser} from '../../Store/Reducers/authSlice';
import {useDebouncedCallback} from 'use-debounce';
import Navigator from '../../Utils/Navigator';
import axios from 'axios';




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
    console.log('log outtttttttt');
    
  };

  const login=useDebouncedCallback(
    async ({ username, password }: { username: string; password: string }) => {
      console.log('vao ham login');
      
      // if(username==='Admin' && password ==='A')
      try{
        const data = await axios({
          url : API.API_AUTH_LOGIN,
          data: {
            username,
            password
          },
          method: 'post'
        })
        if (data){
          console.log('dataaaa  ',data);
          dispatch(setAuth({
            isLogged: true,
            token: data.data.accessToken,
            refreshToken: data.data.refreshToken,
            refreshTokenExpiredDate: null,
            type: data.data.type
          }))
          dispatch(setUser({
            id: null,
            address: data.data.address,
            authorities: data.data.listRole,
            avatar: null,
            birthday: null,
            firstName: data.data.firstName,
            gender: null,
            lastName: data.data.lastname,
            status: null,
            username: data.data.userName
          }))
          Navigator.reset('TabNavigation');

        }
      }
      catch(erorr){
        console.log('loi dang nhap  ',erorr);
        
      }
    }
  )
  return {
    account,
    onSetAccount,
    onLogout,
    login
  };
};
