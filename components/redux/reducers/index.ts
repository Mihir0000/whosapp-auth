import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
    AllUser: userReducer,
    user: authReducer,
});

export default reducers;
// export type RootState = ReturnType<typeof reducers>;
