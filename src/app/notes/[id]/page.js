import PocketBase from 'pocketbase';

async function getNote(noteId) {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const record = await pb.collection('Notes').getOne(noteId);

    // console.log(record)
    return record;
}

export default async function showNote({params}) {

    const note = await getNote(params.id);
    return (
        <div>
            <ul>
                <li key={note.id} className='mt-3 ml-4'>
                    <h3>Title: {note.Title}</h3>
                    <p>Content:"{note.Content}"</p>
                    <hr className='my-2'></hr>
                </li>
            </ul>
        </div>
    );
}