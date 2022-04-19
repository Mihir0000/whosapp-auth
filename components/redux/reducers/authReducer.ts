import { registerConstant, loginConstant, logoutConstant } from '../constants/authConstants';
import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

export interface userState {
    loading: boolean;
    error: string | null;
    user: string[];
}

const initialState: userState = {
    loading: false,
    error: null,
    user: [],
};

const registerReducer = (
    state: userState = initialState,
    action: AnyAction
): userState => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        case registerConstant.REGISTER_REQUEST:
        case loginConstant.LOGIN_REQUEST:
            return {
                loading: true,
                error: null,
                user: [],
            };
        case logoutConstant.LOGOUT_REQUEST:
            return {...state,
                loading: true,
                error: null,

            };
        case registerConstant.REGISTER_SUCCESS:
        case loginConstant.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
            };
        case logoutConstant.LOGOUT_SUCCESS:
            return {
                loading: false,
                error: null,
                user: [],
            };
        case registerConstant.REGISTER_FAIL:
        case loginConstant.LOGIN_FAIL:
        
            return {
                ...state,
                loading: false,
                error: action.payload,
                user: [],
            };
        case logoutConstant.LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default registerReducer;
