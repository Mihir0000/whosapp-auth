import React, { useContext, useEffect } from 'react';
import { Context } from '../context';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { userActionCreator } from '../components/redux/action-crators/userActionCreators';
import { loginActionCreator } from '../components/redux/action-crators/authActionCreators';
import { RootStateOrAny } from 'react-redux';
import Router from 'next/router';

function Auth() {
    const { userName, setUserName, secret, setSecret } = useContext(Context);
    const dispatch = useDispatch();
    const user = useSelector((state: RootStateOrAny) => state.AllUser.data);
    const signInHandler = () => {
        let originalUser;
        user.map((item: any) => {
            if (item.email === userName && item.password === secret) {
                originalUser = item;
            }
        });
        if (!originalUser) {
            alert('Invalid User or Password');
        } else {
            dispatch(loginActionCreator(userName, secret));
            Router.push('/chat');
        }
    };

    useEffect(() => {
        dispatch(userActionCreator());
    }, [dispatch]);

    return (
        <div className="background">
            <div className="auth-container">
                <form
                    className="auth-form"
                    style={{ display: 'flex' }}
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
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

                        <Link href={'/register'} passHref>
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
