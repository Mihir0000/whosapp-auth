import axios from 'axios';
import {
    registerConstant,
    loginConstant,
    logoutConstant,
} from '../constants/authConstants';
import Router from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = (text: string) => toast(text);

export const registerActionCreator = (userName: string, secret: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: registerConstant.REGISTER_REQUEST,
        });
        var name = userName.split('@')[0];
        name = name[0].toUpperCase() + name.slice(1, name.length);

        var data = {
            email: userName,
            password: secret,
            name,
        };
        Backendless.UserService.register(data)
            .then(function (registeredUser) {
                console.log('new Contact instance has been saved');
                dispatch({
                    type: registerConstant.REGISTER_SUCCESS,
                    payload: data.email,
                });
                setTimeout(() => {
                    notify('Login Now');
                }, 1000);
                notify('Regisration Successful ✅');
            })
            .catch(function (error) {
                console.log('an error has occurred ' + error.message);
                dispatch({
                    type: registerConstant.REGISTER_FAIL,
                    payload: error.message,
                });
                if (userName.length === 0 || secret.length === 0) {
                    notify('Please Enter Valid Email or Password');
                } else {
                    notify("You're Already Registered !!");
                }

                // Backendless.Data.of('whosapp')
                //     .save(data)
                //     .then(function (savedObject) {
                //         console.log('new Contact instance has been saved');
                //         dispatch({
                //             type: registerConstant.REGISTER_SUCCESS,
                //             payload: data,
                //         });
                //     })
                //     .catch(function (error) {
                //         console.log('an error has occurred ' + error.message);
                //         dispatch({
                //             type: registerConstant.REGISTER_FAIL,
                //             payload: error.message,
                //         });
            });
    };
};

export const loginActionCreator = (email: string, password: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: loginConstant.LOGIN_REQUEST,
        });
        // try {
        //     const data = { email, password };

        //     dispatch({
        //         type: loginConstant.LOGIN_SUCCESS,
        //         payload: data,
        //     });
        // } catch (error: any) {
        //     dispatch({
        //         type: loginConstant.LOGIN_FAIL,
        //         payload: error.message,
        //     });
        // }
        Backendless.UserService.login(email, password, true)
            .then(function (loggedInUser: any) {
                const data = { email, password };
                if (email.length === 0 || password.length === 0) {
                    notify('Please Enter Valid User or Password');
                }
                const value = localStorage.getItem(
                    'Backendless_2C1B1F9E-7BEE-C020-FF8D-B4A820E4DB00'
                );
                var user = !!value ? JSON.parse(value) : undefined;

                user.name = loggedInUser.name;
                localStorage.setItem('Backendless', JSON.stringify(user));
                dispatch({
                    type: loginConstant.LOGIN_SUCCESS,
                    payload: data.email,
                });
                setTimeout(() => {
                    // Router.replace('https://chat-ui-backend.vercel.app/');
                    Router.replace('http://localhost:3000/chat');
                }, 1500);
                notify('Successfully LoggedIn ✅');
            })
            .catch(function (error) {
                dispatch({
                    type: loginConstant.LOGIN_FAIL,
                    payload: error.message,
                });
                notify('Invalid Login or Password ❌');
            });
    };
};

export const userLogout = () => {
    return async (dispatch: any) => {
        dispatch({
            type: logoutConstant.LOGOUT_REQUEST,
        });

        Backendless.UserService.logout()
            .then(function () {
                console.log('Logged Out Successfully');
                localStorage.removeItem('Backendless');
                localStorage.removeItem(
                    'Backendless_2C1B1F9E-7BEE-C020-FF8D-B4A820E4DB00'
                );
                Router.replace('/');
                dispatch({
                    type: logoutConstant.LOGOUT_SUCCESS,
                });
            })
            .catch(function (error) {
                console.log(error.message);
                dispatch({
                    type: logoutConstant.LOGOUT_FAIL,
                    payload: error.message,
                });
            });
    };
};
