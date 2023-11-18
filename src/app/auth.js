'use client'
import { useState } from 'react';
import PocketBase from 'pocketbase';

export default function Auth() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    const register = async () => {
    try {
        const pb = new PocketBase('http://127.0.0.1:8090');
        console.log(email);
        console.log(password)
        const data = {
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
        <div>
            <form>
            <label>Email: </label>
            <input
            type='text'
            placeholder='Enter your email'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            />

            <label>Password: </label>
            <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
            />
            <button type='button' onClick={register}>Register</button>
            </form>
        </div>
    );
}
