import {GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth } from '../firebase'

const style = {
  wrapper: `flex:justify-center`
}
const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Sign-in successful:", result.user);
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
    });
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}

export default SignIn