import React, { useContext, useEffect } from 'react';
import { Context } from '../context';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Link from 'next/link';
function Auth() {
    const { userName, setUserName, secret, setSecret } = useContext(Context);

    useEffect(() => {
        console.log('username', userName);
    }, [userName]);

    useEffect(() => {
        console.log('secret', secret);
    }, [secret]);

    return (
        <div className="background">
            <div className="auth-container">
                <form
                    className="auth-form"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div
                        className="auth-title text-title "
                        style={{ width: '95%', marginLeft: '2.5%' }}
                    >
                        WhosApp
                    </div>

                    <div
                        className="login-buttons"
                        style={{ marginBottom: '20%' }}
                    >
                        <div style={{ margin: 5 }}></div>

                        <Link href="/" passHref>
                            <Button className="white-font-buttons">
                                <ArrowBack></ArrowBack>Sign In
                            </Button>
                        </Link>
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

                    <div style={{ margin: '8%' }}></div>

                    <div className="row">
                        <div className="enter-button-container">
                            <Button className="enter-button">
                                <div>Reset </div>
                                <ArrowForwardIcon fontSize="medium"></ArrowForwardIcon>
                            </Button>
                        </div>
                        <div style={{ margin: 5 }}></div>
                        <div className="forgot-button-container">
                            <Button
                                className="forgot-button "
                                disabled={true}
                                style={{
                                    backgroundColor: 'white',
                                    fontWeight: '900',
                                    color: 'black',
                                }}
                            >
                                <div>Forgot Password?</div>
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;
