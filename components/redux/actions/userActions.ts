import { userConstant } from '../constants/userConstants';

interface userRequestAction {
    type: userConstant.ALL_USERS_REQUEST;
}

interface userSuccessAction {
    type: userConstant.ALL_USERS_SUCCESS;
    payload: string[];
}
interface userFailAction {
    type: userConstant.ALL_USERS_FAIL;
    payload: string;
}

export type userAction = userRequestAction | userSuccessAction | userFailAction;
