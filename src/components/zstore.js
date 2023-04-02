import { create } from 'zustand'


export const useStore = create((set) => ({
    firstname: '',
    lastname: '',
    email: '',
    password:'',
    setFirstname: (firstname) => set(state => ({
        firstname
    })),
    setLastname: (lastname) => set(state => ({
        lastname
    })),
    setEmail: (email) => set(state => ({
        email
    })),
    setPassword: (password) => set(state => ({
        password
    })),
}))