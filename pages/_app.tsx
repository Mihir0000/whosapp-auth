import '../styles/globals.css';
import '../styles/chats.css';
import type { AppProps } from 'next/app';
import { ContextProvider } from '../context';
import Backendless from 'backendless';
import React, { FC } from 'react';
import { wrapper } from '../components/redux/store';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
    Backendless.initApp(
        '2C1B1F9E-7BEE-C020-FF8D-B4A820E4DB00',
        '7AF7BA66-76AA-4745-9E9B-54E91012A820'
    );
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    );
};

export default wrapper.withRedux(WrappedApp);
