import React, { useState } from 'react'
import Logo_svg from '../assets/logo_svg'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const schema = Yup.object().shape({
        fullname: Yup.string().required('Full name is required'),
        email: Yup.string().email('Invalid Email').required('Email is Required'),
        message: Yup.string().required('Message is required')
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    return <div className='w-full h-screen inline-flex'>
       
        <div className='w-1/2  h-full pl-16 pt-16'>
        <div>
        <Logo_svg />
                <div className='flex justify-between '>
                    <span className='text-3xl font-medium p-10'>Get in touch</span>
                    
                </div>
                <div className='my-5'>
                    <span>Please fill out the form and we will be in touch</span>
                </div>
                <form >
                    <div className='my-4'>
                        <input className='w-96 h-10 px-3 border-2 border-lightred outline-lightred  rounded-md' {...register('fullname')} type='text' placeholder='Full Name'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='my-4'>
                        <input className='w-96 h-10 px-3 border-2 border-lightred outline-lightred  rounded-md' {...register('email')} type='email' placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='my-4'>
                        <textarea className='resize-none w-96 h-48 px-3 border-2 border-lightred outline-lightred  rounded-md' {...register('message')} type='text' placeholder='Message'
                            onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button className='bg-lightred px-20 py-2 mb-20  text-white rounded-full disabled:bg-slate-300'
                    >Submit</button>
                </form>
            </div>
        </div>
        <div className='w-1/2 bg-[#46C3EA] bg-opacity-10 h-full contact-background'>
            <h1 className='absolute right-20 top-20 text-3xl font-medium'>Contact</h1>
        </div>
    </div>

    return (
        <div className='p-16 bg-red-500 contact-background'>
            <div className=' '>
                
            </div>
            
        </div>
    )
}

export default Contact