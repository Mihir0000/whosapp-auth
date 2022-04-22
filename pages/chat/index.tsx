import { userLogout } from '../../components/redux/action-crators/authActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import styles from './index.module.css';
import { useEffect } from 'react';

var createHost = require('cross-domain-storage/host');
if (typeof window !== 'undefined') {
    // Client-side-only code
    console.log('at Last');
    var storageHost = createHost([
        {
            origin: 'http://localhost:3000',
            allowedMethods: ['get'],
        },
        {
            origin: 'https://chat-ui-backend.vercel.app',
            allowedMethods: ['get'],
        },
    ]);
}

function ChatPage() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(userLogout());
    };
    const loginHandler = () => {
        Router.replace('/');
    };
    const { user } = useSelector((state: any) => state.User);
    console.log(user);
    // useEffect(() => {
    //     console.log('using host');
    //     var storageHost = createHost([
    //         {
    //             origin: 'https://chat-ui-backend.vercel.app/',
    //             allowedMethods: ['get'],
    //         },
    //         {
    //             origin: 'https://whosapp-auth.vercel.app/chat',
    //             allowedMethods: ['get', 'set', 'remove'],
    //         },
    //         {
    //             origin: 'https://whosapp-auth.vercel.app',
    //             allowedMethods: ['get', 'set', 'remove'],
    //         },
    //         {
    //             origin: 'http://localhost:3000/chat',
    //             allowedMethods: ['get'],
    //         },
    //         {
    //             origin: 'http://localhost:3000',
    //             allowedMethods: ['get'],
    //         },
    //     ]);
    // }, []);

    if (user.length === 0) {
        return (
            <div>
                <div>Login to view chat</div>
                <button onClick={loginHandler}>Login</button>
            </div>
        );
    }

    return (
        <div>
            <iframe
                style={{ width: '100vw', height: '100vh' }}
                src="https://chat-ui-backend.vercel.app/"
            ></iframe>
            <button onClick={logoutHandler} className={styles.logoutBtn}>
                logout
            </button>
        </div>
    );
}

export default ChatPage;
