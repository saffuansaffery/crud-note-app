'use client'
import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authStatus, setAuthStatus] = useState('');
    const pb = new PocketBase('http://127.0.0.1:8090');

    const updateAuthStatus = () => {
        setAuthStatus(pb.authStore.isValid.toString());
    };

    useEffect(() => {
        updateAuthStatus(); 
    }, [pb.authStore.isValid]);

    const login = async () => {
        try {
            const authData = await pb.collection('users').authWithPassword(
                email,
                password,
            );
            console.log('Authentication successful:', authData);
            updateAuthStatus();
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const logout = async () => {
        try {
            await pb.authStore.clear();
            console.log('Logout successful');
            updateAuthStatus();
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div className='w-screen flex flex-column justify-center border-b border-gray-900/10 pb-12 pt-5'>
            <form className='w-1/3'>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>Login</h2>
                <h3>Login status: {authStatus}</h3>
                {pb.authStore.model && 
                    <h3>User id: {pb.authStore.model.id}</h3>
                }
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                    <div className='sm:col-span-3'>
                        <label htmlFor="email-login" className='block text-sm font-medium leading-6 text-gray-900'>Email address</label>
                        <div className='mt-2'>
                            <input id="email-login" name="email-login" type="email" autoComplete="email" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            value={email}
                            onChange={ (e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className='sm:col-span-3'>
                        <label htmlFor="password-login" className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
                        <div className='mt-2'>
                            <input id="password-login" name="password-login" type="password" autoComplete="password" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
                            value={password}
                            onChange={ (e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex items-center justify-end gap-x-6'>
                    <button
                    type="button"
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    onClick={logout}
                    >
                    Logout
                    </button>
                    <button
                    type="button"
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    onClick={login}
                    >
                    Login
                    </button>
                </div>
            </form>
        </div>
    );
}
