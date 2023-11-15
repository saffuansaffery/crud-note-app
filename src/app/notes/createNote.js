'use client'
import PocketBase from 'pocketbase';
import { useState } from "react";


export default function CreateNote (){
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const createNote = async() => {
        const data = {
            "Title": title,
            "Content": content
        };
        console.log(data);
        const pb = new PocketBase('http://127.0.0.1:8090');
        const record = await pb.collection('Notes').create(data);
        console.log(record);
    }

    return (
        <form>
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
            <button type='button' onClick={ createNote }>Submit</button>
        </form>
    );
}
