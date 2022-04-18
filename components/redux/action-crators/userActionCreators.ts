import axios from 'axios';
import { userConstant } from '../constants/userConstants';

export const userActionCreator = () => {
    return async (dispatch: any) => {
        dispatch({
            type: userConstant.ALL_USERS_REQUEST,
        });
        try {
            const { data } = await axios.get(
                'https://fastsand.backendless.app/api/data/whosapp'
            );

            dispatch({
                type: userConstant.ALL_USERS_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: userConstant.ALL_USERS_FAIL,
                payload: error.message,
            });
        }
    };
};
