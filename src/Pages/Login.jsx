import {  signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleAuthProvider } from '../firebaseconfig'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()

    const handleSubmit = async() =>{    
        try{
            const res=await signInWithPopup(auth,googleAuthProvider);
            localStorage.setItem('token',res.user.accessToken);
            navigate('/add')
        }catch(err){
            console.log(err);
            return false;
        }
    }
  return (
    <div align="center">
        <h1>Google Authcation</h1>
        <button className='mt-5 btn btn-primary' onClick={()=> handleSubmit()}>Google</button>
    </div>
  )
}

export default Login