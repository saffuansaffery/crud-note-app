// 'use client'
import PocketBase from 'pocketbase';
// import { useState } from "react";



export default function auth(){
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const pb = new PocketBase('http://127.0.0.1:8090');
    // const login = async() => {
    //     try {
    //         const authData = await pb.collection('users').authWithPassword(email, password);
    //         console.log(pb.authStore.isValid);
    //         console.log(pb.authStore.token);
    //         console.log(pb.authStore.model.id);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    return(
        <>
            <h1>Logged in : {pb.authStore.isValid.toString()} </h1>
            <form>
                <label>Email: </label>
                <input 
                type='text'
                placeholder='Enter your email'
                // value={email}
                // onChange={ (e) => setEmail(e.target.value) }
                >
                </input>
                <label>Password: </label>
                <input
                type='text'
                placeholder='Enter your password'
                // value={password}
                // onChange={ (e) => setPassword(e.target.value) }
                >
                </input>
                <button type='button'>Log In</button> 
            </form>
        </>
    )
}