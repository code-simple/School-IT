import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/src/components/config/firebase';


const LoginWithEmailPass = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginWithEmailPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const onSubmit = (e) => {
    e.preventDefault()
    loginWithEmailPassword()
  }
  return (
    <div className='grid h-screen place-items-center'>
      <form onSubmit={onSubmit}>

        <div className='my-4'>
          <input className='w-80 h-10 px-3 outline rounded-md' type='email' placeholder='Email'
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='my-4'>
          <input className='w-80 h-10 px-3 outline rounded-md' type='password' placeholder='Password'
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='text-center'>
          <button className='bg-slate-400 text-white px-4 py-2 rounded-md' >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginWithEmailPass