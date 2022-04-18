import { createStore, Store } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import { userState } from './reducers/userReducer';
import userReducer from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

const makeStore = (contex: Context) =>
    configureStore({
        reducer: {
            AllUser: userReducer,
            User: authReducer,
        },
        devTools: true,
    });
export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore, {
    debug: false,
});
