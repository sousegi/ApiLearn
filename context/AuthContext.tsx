import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    const register = (name, email, password) => {
        setIsLoading(true);
        axios
            .post('https://test.dev.ourbox.org/api/auth/register',{
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


    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                register,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};