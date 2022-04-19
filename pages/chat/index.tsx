import { userLogout } from '../../components/redux/action-crators/authActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import styles from "./index.module.css"

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
            <button
                onClick={logoutHandler}
                className = {styles.logoutBtn}
                
            >
                logout
            </button>
        </div>
    );
}

export default ChatPage;
