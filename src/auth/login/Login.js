import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css"
import { auth, provider } from "../../firebase"


function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
        }).catch((error) => alert(error.message));
    }

  return (
    <div className='login'>
        <div className="fb-desc">
            <h1>facebook</h1>
            <p>Connect with friends and the world around you on Facebook</p>
        </div>
        <div className="login-form">
            <div className="disabled-form">
                <form>
                    <input type="text" placeholder='Email address or phone number' disabled/>
                    <input type="text" placeholder='Password' disabled/>
                    <button className='disabled-login-btn' onClick={(e) => e.preventDefault()} type='submit'>Login In</button>
                </form>
            </div>
            <div className="google-sign-in">
                <Button type="submit" onClick={signIn}>G+ Sign In with Google</Button>
            </div>
        </div>
    </div>
  )
}

export default Login;