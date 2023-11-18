'use client'
import { useState } from 'react';
import PocketBase from 'pocketbase';

export default function Register() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ username, setUsername ] = useState('');



    const register = async () => {
    try {
        const pb = new PocketBase('http://127.0.0.1:8090');
        console.log(email);
        console.log(password)
        const data = {
            "username": username,
            "email": email,
            "emailVisibility": true,
            "password":password,
            "passwordConfirm": password,
            "name": "test"
        };
        const record = await pb.collection('users').create(data);
        console.log('User record created:', record);

        await pb.collection('users').requestVerification(email);
        console.log('Verification request sent.');
        } catch (error) {
        console.error('Error during registration:', error.data);
        }
    };

    return (

        <div className='w-screen flex flex-column justify-center border-b border-gray-900/10 pb-12 pt-5'>
            <form className='w-1/3'>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>Register Profile</h2>

                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                    <div className='sm:col-span-3'>
                        <label htmlFor="email-register" className='block text-sm font-medium leading-6 text-gray-900'>Email address</label>
                        <div className='mt-2'>
                            <input id="email-register" name="email-register" type="email" autoComplete="email" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
                            value={email}
                            onChange={ (e) => setEmail(e.target.value)}/>
                        </div>
                    </div>

                    <div className='sm:col-span-3'>
                        <label htmlFor="password-register" className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
                        <div className='mt-2'>
                            <input type="password" name="password-register" id="password-register" autoComplete="password-register" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
                            value={password}
                            onChange={ (e) => setPassword(e.target.value)}/>
                        </div>
                    </div>

                    <div className='sm:col-span-4'>
                        <label htmlFor="username" className='block text-sm font-medium leading-6 text-gray-900'>Username</label>
                        <div className='mt-2'>
                            <input type="text" name="username" id="username" autoComplete="username" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
                            value={username}
                            onChange={ (e) => setUsername(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex items-center justify-end gap-x-6'>
                    <button type="button" className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={register}>Register</button>
                </div>
            </form>
        </div>
    );
}
