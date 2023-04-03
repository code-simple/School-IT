import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/src/components/config/firebase';
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image'
import logo from '@/src/assets/logo.png'

const LoginWithEmailPass = () => {

  const schema = Yup.object().shape({
    email: Yup.string().email().required('Email is Required'),
    password: Yup.string().required('Password is required')
  })

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema)
  })


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
    <div className='flex'>
      <div className='flex flex-col text-white bg-lightred w-[570px] h-[1024] justify-center place-items-center'>

        <h1 className='text-3xl text-white font-semibold'>Not Signed Up Yet?</h1>
        <p className='mt-5 px-28 text-center'>Click the link below to get started</p>
        <button className='rounded-full border-white border-2 px-28 py-2 m-10 text-xl'>Sign Up</button>
      </div>
      <div className='flex flex-col h-screen place-items-center'>
        
        <form onSubmit={onSubmit}>
        <Image src={logo} width={202} height={65.54} className='mt-5 ml-5' />
          <div className='flex flex-col mx-60 py-20 place-items-center'>
          <div className='my-4'>
          <h1 className='text-center mt-20 text-3xl font-semibold'>Access Account</h1>
        <p className='text-center text-sm my-5'>Gain access to your account and explore!</p>
            <input {...register('email')} className='w-96 h-10 px-3 border-2 border-lightred outline-lightred  rounded-md' type='email' placeholder='Email'
              onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className='my-4'>
            <input {...register('password')} className='w-96 h-10 px-3 border-2 border-lightred outline-lightred  rounded-md' type='password' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className='flex flex-col text-center gap-2'>
            <button disabled={!isValid} className='bg-lightred px-20 py-2  text-white rounded-full disabled:bg-slate-300' >Sign in</button>
            <span className='text-sm'>Forgot password? <a href='#'>Click here</a></span>
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginWithEmailPass