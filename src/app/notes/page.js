import PocketBase from 'pocketbase';
import Create from './createNote.js';

async function fetchNotes(){
    try {
        const pb = new PocketBase('http://127.0.0.1:8090');
        const data = await pb.collection('Notes').getFullList({sort: '+created'}); 
        // console.log('Successfully fetched notes:', data);
        return data;
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error; 
    } 
}

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

export default async function NotesPage(){

    const notes = await fetchNotes();
    return(
        <div>
            <ul>
                {notes?.map((note) => (
                    <a key={note.id} href={`/notes/${note.id}`}>
                        <li key={note.id} className='mt-3 ml-4'>
                            <h3>Title: {note.Title}</h3>
                            <p>Content:"{note.Content}"</p>
                            <hr className='my-2'></hr>
                        </li>
                    </a>
                ))}
            </ul>
            <div>
                <Create />
            </div>
        </div>
    );
}

