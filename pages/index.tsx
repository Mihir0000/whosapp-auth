import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { userActionCreator } from '../components/redux/action-crators/userActionCreators';
import {
    loginActionCreator,
    userLogout,
} from '../components/redux/action-crators/authActionCreators';
import { RootStateOrAny } from 'react-redux';

function Auth() {
    const { userName, setUserName, secret, setSecret } = useContext(Context);
    const dispatch = useDispatch();
    const uName = useSelector((state: RootStateOrAny) => state.User.user.email);
    // const [localUser, setLocalUser] = useState(null);
    // const [submit, setSubmit] = useState(false);

    // const localData = localStorage.getItem(
    //     'Backendless_2C1B1F9E-7BEE-C020-FF8D-B4A820E4DB00'
    // );

    // if (typeof localData === 'string') {
    //     console.log(JSON.parse(localData));
    // }
    // if (localUser) {
    //     // console.log(localUser);
    //     const {
    //         'current-user-id': currentUser,
    //         stayLoggedIn,
    //         'user-token': userToken,
    //     } = localUser;
    //     // console.log(currentUser, stayLoggedIn, userToken);
    // }

    // const [value, setValue] = useState<any>({});
    // function setting_submit() {
    //     setValue(
    //         localStorage.getItem(
    //             'Backendless_2C1B1F9E-7BEE-C020-FF8D-B4A820E4DB00'
    //         )
    //     );

    // }

    // function setcookie() {
    //     var user;
    //     console.log('value', value);

    //     if (value && userName) {
    //         console.log('inside value and username');
    //         user = !!value ? JSON.parse(value) : undefined;
    //         var user_name = userName.split('@')[0];
    //         // console.log(user_name);
    //         console.log('userName +value', userName);

    //         user.user_name = user_name;
    //         localStorage.setItem(
    //             'Backendless_2C1B1F9E-7BEE-C020-FF8D-B4A820E4DB00',
    //             JSON.stringify(user)
    //         );
    //         // setLocalUser(user);
    //     }
    // }
    useEffect(() => {
        // localStorage.removeItem('Backendless');
        // localStorage.removeItem(
        //     'Backendless_2C1B1F9E-7BEE-C020-FF8D-B4A820E4DB00'
        // );
        dispatch(userLogout());
    }, []);

    const submitHandler = (e: any) => {
        e.preventDefault();
        // const value = localStorage.getItem(
        //     'Backendless_2C1B1F9E-7BEE-C020-FF8D-B4A820E4DB00'
        // );
        // console.log(userName);

        // var user;
        // if (value && userName) {
        //     user = !!value ? JSON.parse(value) : undefined;
        //     var user_name = userName.split('@')[0];
        //     console.log(user_name);
        //     console.log(userName);

        //     user.user_name = user_name;
        //     localStorage.setItem(
        //         'Backendless_2C1B1F9E-7BEE-C020-FF8D-B4A820E4DB00',
        //         JSON.stringify(user)
        //     );
        //     setLocalUser(user);
        // }
        // setSubmit(true);
    };

    const signInHandler = () => {
        dispatch(loginActionCreator(userName, secret));
        dispatch(userActionCreator());
    };

    return (
        <div className="background">
            <div className="auth-container">
                <form
                    className="auth-form"
                    style={{ display: 'flex' }}
                    onSubmit={submitHandler}
                >
                    <div
                        className="auth-title text-title "
                        style={{ width: '95%', marginLeft: '2.5%' }}
                    >
                        WhosApp
                    </div>
                    <div className="login-buttons">
                        <div style={{ margin: 5 }}></div>

                        <Button
                            className="white-font-buttons"
                            style={{
                                backgroundColor: 'white',
                                fontWeight: '900',
                                color: 'black',
                            }}
                            disabled={true}
                        >
                            Sign In
                        </Button>
                        <div style={{ margin: 5 }}></div>

                        <Link href={'/register'} replace>
                            <Button className="white-font-buttons">
                                Register
                                <ArrowForwardIcon></ArrowForwardIcon>
                            </Button>
                        </Link>
                        <div style={{ margin: 5 }}></div>
                    </div>

                    <div
                        style={{
                            color: 'white',
                            backgroundColor: 'hsla(136, 89%, 91%,0.85)',
                            borderRadius: 15,
                            padding: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            borderColor: 'blue',
                            borderWidth: 5,
                        }}
                    >
                        <TextField
                            sx={{ color: 'warning.main', width: 1 }}
                            id="email"
                            label="Enter Email"
                            variant="standard"
                            color="primary"
                            type="email"
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        ></TextField>
                    </div>

                    <div style={{ margin: '5%' }}></div>
                    <div
                        style={{
                            color: 'white',
                            backgroundColor: 'hsla(136, 89%, 91%,0.85)',
                            borderRadius: 15,
                            padding: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            borderColor: 'blue',
                            borderWidth: 5,
                        }}
                    >
                        <TextField
                            sx={{ color: 'warning.main', width: 1 }}
                            id="password"
                            label="Enter Password"
                            variant="standard"
                            color="primary"
                            type="password"
                            onChange={(e) => {
                                setSecret(e.target.value);
                            }}
                        />
                    </div>

                    <div className="row">
                        <div className="enter-button-container">
                            <Button
                                className="enter-button"
                                type="submit"
                                onClick={signInHandler}
                            >
                                <div>Sign In</div>
                                <ArrowForwardIcon fontSize="medium"></ArrowForwardIcon>
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;
