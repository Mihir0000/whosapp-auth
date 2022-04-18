import axios from 'axios';
import { registerConstant, loginConstant } from '../constants/authConstants';

export const registerActionCreator = (userName: any, secret: any) => {
    return async (dispatch: any) => {
        dispatch({
            type: registerConstant.REGISTER_REQUEST,
        });

        var data = {
            email: userName,
            password: secret,
        };

        Backendless.Data.of('whosapp')
            .save(data)
            .then(function (savedObject) {
                console.log('new Contact instance has been saved');
                dispatch({
                    type: registerConstant.REGISTER_SUCCESS,
                    payload: data,
                });
            })
            .catch(function (error) {
                console.log('an error has occurred ' + error.message);
                dispatch({
                    type: registerConstant.REGISTER_FAIL,
                    payload: error.message,
                });
            });
    };
};

export const loginActionCreator = (email: any, password: any) => {
    return async (dispatch: any) => {
        dispatch({
            type: loginConstant.LOGIN_REQUEST,
        });
        try {
            const data = { email, password };

            dispatch({
                type: loginConstant.LOGIN_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: loginConstant.LOGIN_FAIL,
                payload: error.message,
            });
        }
    };
};
