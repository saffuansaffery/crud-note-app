'use client'
import PocketBase from 'pocketbase';
import { useState } from "react";
import { useRouter } from 'next/navigation.js';

export default function CreateNote (){
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const router = useRouter();


    const createNote = async() => {
        try {
            const data = {
                "Title": title,
                "Content": content
            };
            const pb = new PocketBase('http://127.0.0.1:8090');
            const record = await pb.collection('Notes').create(data);
            router.refresh();
            // console.log(record);
        } catch (error) {
            console.error('Error fetching notes:', error);
            throw error; 
        } 
    }

    return (
        <form onSubmit={createNote}>
            <label>Title: </label>
            <input 
            type='text' 
            placeholder="Enter a title"
            value={title}
            onChange={ (e) => setTitle(e.target.value) }
            ></input>
            <label>Content: </label>
            <textarea 
            type='text' 
            placeholder="Write your content"
            value={content}
            onChange={ (e) => setContent(e.target.value) }
            ></textarea>
            <button type='submit'>Submit</button>
        </form>
    );
}
