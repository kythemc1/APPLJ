import {API} from '../../Configs/Constants/API';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useDebouncedCallback} from 'use-debounce';
import axios from 'axios';




export const useUser = () => {
  const dispatch = useDispatch();
  const [accountRegister, setAccountRegister] = useState<{
    username: string;
    email: string;
  }>({
    username: '',
    email: '',
  });

  const onSetAccountRegister = (field: 'username' | 'email', value: string) => {
    setAccountRegister({
      ...accountRegister,
      [field]: value,
    });
  };

  

  const register=useDebouncedCallback(
    async ({ username, email }: { username: string; email: string }) => {
      console.log('vao ham register',username,email);
      
      try{
        const data = await axios({
          url : API.API_REGISTER,
          data: {
            username,
            email,
            "firstName": "",
            "lastname": "",
            "password" : "1234",
            "age": "",
            "address": "",
            "phoneNumber": "",
            "listRole": ["user"]
          },
          method: 'post'
        })
        if (data){
          console.log('dataaaa  ',data);
        }
      }
      catch(erorr){
        console.log('loi dang ki ',erorr);
      }
    }
  )
  return {
    accountRegister,
    onSetAccountRegister,
    register
  };
};
