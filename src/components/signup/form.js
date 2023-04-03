import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '@/src/components/config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';


const Form = () => {
    const router = useRouter()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
//Schema
    const schema = Yup.object().shape({
        firstname: Yup.string().required('Field is required'),
        lastname: Yup.string().required('Field is required'),
        email: Yup.string().email('Invalid Email').required('Email is Required'),
        password: Yup.string().required('Password is required')
    })
//useForm
    const { handleSubmit,setError, register,formState: { errors, isValid, isSubmitting} } = useForm({
        resolver: yupResolver(schema),
        defaultValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:''
        }
    })

// Create new user, add data to firestore
    const onSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                addDetails(user.uid)
                router.push('/')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                // Implement Switch case for all errors related to email
                setError('email', { type: 'custom', message: error.code });
                // ..
            });
    }

    const addDetails = async (uid) => {
        await addDoc(collection(db, 'registered'), {
            uid,
            email,
            firstname,
            lastname
        })
    }

    return (
        <div className='grid h-screen place-items-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='my-4'>
                    <input className='w-80 h-10 px-3 outline rounded-md' {...register('firstname')} type='text' placeholder='First Name'
                        onChange={(e) => setFirstname(e.target.value)} />
                    <p className='text-red-600'>{errors.firstname && errors.firstname.message}</p>
                </div>
                <div className='my-4'>
                    <input className='w-80 h-10 px-3 outline rounded-md' {...register('lastname')} type='text' placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)} />
                    <p className='text-red-600'>{errors.lastname && errors.lastname.message}</p>
                </div>
                <div className='my-4'>
                    <input className='w-80 h-10 px-3 outline rounded-md' {...register('email')} type='email' placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)} />
                    <p className='text-red-600'>{errors.email && errors.email.message}</p>
                </div>
                <div className='my-4'>
                    <input className='w-80 h-10 px-3 outline rounded-md' {...register('password')} type='password' placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} />
                    <p className='text-red-600'>{errors.password && errors.password.message}</p>
                </div>
                <div className='text-center'>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded-md disabled:bg-slate-300'
                        disabled={!isValid}
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form