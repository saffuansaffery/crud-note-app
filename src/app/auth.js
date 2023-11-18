'use client'
import { useState } from 'react';
import PocketBase from 'pocketbase';

export default function Auth() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const pb = new PocketBase('http://127.0.0.1:8090');

    const register = async () => {
    try {
        console.log(email);
        console.log(password)
        const data = {
            "username": "test_username",
            "email": email,
            "emailVisibility": true,
            "password":password,
            "passwordConfirm": "12345678",
            "name": "test"
        };
        // Create a new user record
        const record = await pb.collection('users').create(data);
        console.log('User record created:', record);

        // Request email verification
        await pb.collection('users').requestVerification(data.email);
        console.log('Verification request sent.');
        } catch (error) {
        console.error('Error during registration:', error);
      // Handle error appropriately (e.g., display an error message to the user)
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
