import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
var validator = require('validator');
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { registerActionCreator } from '../components/redux/action-crators/authActionCreators';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = (text: string) => toast(text);

function Auth() {
    const { userName, setUserName, secret, setSecret } = useContext(Context);
    const dispatch = useDispatch();

    const [pass, setPass] = useState<string>('');
    const [pass_status, set_pass_status] = useState<null | string>(null);
    const AllUserData = useSelector(
        (state: RootStateOrAny) => state.AllUser.data
    );

    useEffect(() => {
        if (pass !== secret || pass === '') {
            set_pass_status('unmatched');
        } else {
            set_pass_status('matched');
        }
        if (secret === pass && pass != '') {
            set_pass_status('matched');
        } else {
            set_pass_status('unmatched');
        }
    }, [secret, pass, pass_status]);

    const submitHandler = (e: any) => {
        e.preventDefault();
        console.log('okk');
    };
    const onClick = () => {
        let existUser: boolean = false;
        let valid: boolean = false;
        console.log(existUser);
        for (let i = 0; i < AllUserData.length; i++) {
            if (AllUserData[i].email === userName) {
                existUser = true;
                break;
            }
        }
        if (validator.isEmail(userName)) {
            valid = true;
        }
        console.log(existUser);
        if (userName.length === 0 || secret.length === 0 || !valid) {
            notify('Please Enter Valid User or Password');
        } else {
            if (!existUser && valid) {
                dispatch(registerActionCreator(userName, secret));
                notify('Regisration Successful ✅');
                setTimeout(() => {
                    Router.replace('/');
                }, 100);
            } else {
                // notify('Redirecting into SignIn page');
                notify("You're Already Registered !!");
                setTimeout(() => {
                    Router.replace('/');
                }, 100);
            }
        }

        console.log(userName, secret, 'clicked');
    };

    return (
        <div className="background">
            <div className="auth-container">
                <form className="auth-form" onSubmit={submitHandler}>
                    <div
                        className="auth-title text-title "
                        style={{ width: '95%', marginLeft: '2.5%' }}
                    >
                        WhosApp
                    </div>
                    <div
                        className="login-buttons"
                        style={{ marginBottom: '4%' }}
                    >
                        <div style={{ margin: 5 }}></div>

                        <Link href="/" replace>
                            <Button className="white-font-buttons">
                                <ArrowBack></ArrowBack>Sign In
                            </Button>
                        </Link>
                        <div style={{ margin: 5 }}></div>

                        <Button
                            className="white-font-buttons "
                            disabled={true}
                            style={{
                                backgroundColor: 'white',
                                fontWeight: '900',
                                color: 'black',
                            }}
                        >
                            Register
                        </Button>
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
                            autoComplete="off"
                            variant="standard"
                            color="primary"
                            type="email"
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        ></TextField>
                    </div>

                    <div style={{ margin: '2.5%' }}></div>
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
                    <div style={{ margin: '2.5%' }}></div>

                    <div
                        className="row"
                        style={{
                            backgroundColor: 'hsla(136, 89%, 91%,0.85)',
                            borderRadius: 15,
                        }}
                    >
                        <div
                            style={{
                                color: 'white',
                                padding: 5,
                                paddingLeft: 15,
                                paddingRight: 15,
                                borderColor: 'blue',
                                borderWidth: 5,
                                width: '100%',
                            }}
                        >
                            <TextField
                                sx={{ color: 'warning.main', width: 1 }}
                                id="repeat-password"
                                label="Retype Password"
                                variant="standard"
                                color="primary"
                                type="password"
                                onChange={(e) => {
                                    setPass(e.target.value);
                                    if (secret !== e.target.value) {
                                        console.log("Passwords don't match");
                                        set_pass_status('unmatched');
                                    } else {
                                        console.log('Passwords matched');
                                        set_pass_status('matched');
                                    }
                                }}
                            />
                        </div>
                        {pass != '' && pass_status === 'matched' ? (
                            <p style={{ color: 'green' }}>
                                <CheckCircleIcon></CheckCircleIcon>
                            </p>
                        ) : (
                            <></>
                        )}
                        {pass === '' && secret != '' ? (
                            <p style={{ color: 'orange' }}>
                                <ReportGmailerrorredIcon></ReportGmailerrorredIcon>
                            </p>
                        ) : (
                            <></>
                        )}
                        {pass != '' && pass_status === 'unmatched' ? (
                            <p style={{ color: 'red' }}>
                                <DangerousIcon></DangerousIcon>
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className="row" style={{ marginTop: '-4%' }}>
                        <div className="enter-button-container">
                            <Button
                                className="enter-button"
                                type="submit"
                                onClick={onClick}
                            >
                                <div>Register</div>
                                <ArrowForwardIcon fontSize="medium"></ArrowForwardIcon>
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Auth;
