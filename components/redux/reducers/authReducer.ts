import { registerConstant, loginConstant } from '../constants/authConstants';
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
        case registerConstant.REGISTER_SUCCESS:
        case loginConstant.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.payload,
            };
        case registerConstant.REGISTER_FAIL:
        case loginConstant.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                user: [],
            };
        default:
            return state;
    }
};

export default registerReducer;
