'use client'
import { useState } from 'react';
import PocketBase from 'pocketbase';

export default function Auth() {
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

        <div class="w-screen flex flex-column justify-center border-b border-gray-900/10 pb-12 pt-5">
            <form className='w-1/3'>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Register Profile</h2>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            value={email}
                            onChange={ (e) => setEmail(e.target.value)}/>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="mt-2">
                            <input type="password" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            value={password}
                            onChange={ (e) => setPassword(e.target.value)}/>
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div class="mt-2">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                            value={username}
                            onChange={ (e) => setUsername(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={register}>Register</button>
                </div>
            </form>
        </div>
    );
}
