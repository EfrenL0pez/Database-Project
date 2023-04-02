import '../css/Login.css'
import { useRef, useState, useEffect} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

const Login = () =>{

    const userRef = useRef();
    const errRef = useRef();

    const [username, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
    }
    return(
        <div className='login'>
            <header className='header-container'>
                <div className='logo-container'>
                    <img className='home-logo' src={logo}/>
                </div>
            </header>

            <section className='login-page-container'>
                <div className='login-page-container-card'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className='signin-content'>
                    <h1 className='signin-header'>Sign In</h1>
                    </div>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={password}
                            required
                        />
                        <div className='context-button'>
                        <button className='singin-button' >Sign In</button>
                        </div>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            <Link to="/signup">Sign Up</Link>
                        </span>
                    </p>
                </div>
            </section>

            <footer className='footer'>
                <div className='footer-container'>
                    <h5>Copyright 2023, All rights reserved &copy;</h5>
                </div>
            </footer>
        </div>
    );
}
export default Login