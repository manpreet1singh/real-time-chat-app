import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { userLogin } from "../store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { ERROR_CLEAR, SUCCESS_MESSAGE_CLEAR } from "../store/types/authType";
import styles from './Social/Login.module.css'
const Login = ({ history }) => {

    const alert = useAlert();
    const { loading, successMessage, error, authenticate, myInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const inputHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleUserLogin = (e) => {
        e.preventDefault();
        dispatch(userLogin(state))
    }

    useEffect(() => {
        if (authenticate) {
            history.push('/')
        }
        if (successMessage) {
            alert.success(successMessage);
            dispatch({ type: SUCCESS_MESSAGE_CLEAR })
        }
        if (error) {
            error.map(err => alert.error(err));
            dispatch({ type: ERROR_CLEAR })
        }
    }, [successMessage, error])
    return (
        <div className="login">
            {/* <div className="card">
                <div className="card-header">
                    <h3>Login</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onChange={inputHendle} type="email" placeholder="email" value={state.email} name="email" id="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onChange={inputHendle} value={state.password} type="password" name="password" id="password" placeholder="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn" />
                        </div>
                        <div className="form-group">
                            <span><Link to="/messenger/register">Register Your Account</Link></span>
                        </div>
                    </form>
                </div>
            </div> */}
            <div className={styles.card}>
                    <h2>Signup Form</h2>

                    <div className={styles.login_register}>
                         <a href="
                             /messenger/login
                              " className={styles.login} target="blank">Login</a>
                              <a href="
                              /messenger/register
                              " className={styles.register} target="blank">Signup</a>
                    </div>

                    <form onSubmit={handleUserLogin} className={styles.form}>
                         <input onChange={inputHandler} name="email" value={state.email} type="email" placeholder="Email Address" className={styles.email}/>
                         <input onChange={inputHandler}  name="password" value={state.password} type="password" placeholder="password" className={styles.pass}/>
                    </form>


                    <button onClick={(e)=>{handleUserLogin(e)}} type="submit" value="register" className={styles.login_btn}>Signin</button>
               </div>
        </div>
    )
}

export default Login
