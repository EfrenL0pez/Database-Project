import '../css/Home.css'
import logo from '../images/logo.png'
import {Link, useNavigate} from 'react-router-dom';

const Home = () =>{
    const navigate = useNavigate();

    function handleLoginButton(e){
        e.preventDefault();
        navigate('/login')
    }
    function handleSignupButton(e){
        e.preventDefault();
        //S
        navigate('/signup')
    }
    return(
        <div className='home'>
            <header className='header-container'>
                <div className='logo-container'>
                    <img className='home-logo' src={logo}/>
                </div>
            </header>
            <body className='body'>
                <div className='body-container'>
                    <div className='signup-container'>
                        <div className='signup-title'>New to Market insights?</div>
                        <button className='signup-button' onClick={handleSignupButton}>Signup</button>
                    </div>
                    <div className='login-container'>
                        <div className='login-title'>Current User</div>
                        <button className='login-button' onClick={handleLoginButton}>Login</button>
                    </div>
                </div>
            </body>
            <footer className='footer'>
                <div className='footer-container'>
                    <h5>Copyright 2023, All rights reserved &copy;</h5>
                </div>
            </footer>
        </div>
    )
}
export default Home