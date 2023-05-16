import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [articleInfo, setArticleInfo] = useState({});

  const register = (name, email, password) => {
    setIsLoading(true);
    axios
      .post('https://test.dev.ourbox.org/api/auth/register', {
        name,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);

    axios
      .post('https://test.dev.ourbox.org/api/auth/login', {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const store = (title, content) => {
    setIsLoading(true);
    axios
      .post('https://test.dev.ourbox.org/api/article/create', {
        title,
        content,
      })
      .then(res => {
        let articleInfo = res.data;
        console.log(articleInfo);
        setArticleInfo(articleInfo);
        AsyncStorage.setItem('articleInfo', JSON.stringify(articleInfo));
        setIsLoading(false);
        console.log(articleInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);

    axios
      .post(
        'https://test.dev.ourbox.org/api/auth/logout',
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.token}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  // const isLoggedIn = async () =>{
  //     try {
  //         let userInfo = await AsyncStorage.getItem('userInfo');
  //         if (typeof userInfo === "string") {
  //             userInfo = JSON.parse(userInfo);
  //         }
  //
  //         if (userInfo) {
  //             setUserInfo(userInfo);
  //         }
  //     } catch (e) {
  //         console.log(`Is logged in error ${e}`);
  //     }
  // };
  //
  // useEffect(() => {
  //     isLoggedIn();
  // },[])

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        articleInfo,
        // isLoggedIn,
        register,
        login,
        logout,
        store,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
