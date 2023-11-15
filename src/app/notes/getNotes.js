import PocketBase from 'pocketbase';

async function fetchNotes(){

    try {
        const pb = new PocketBase('http://127.0.0.1:8090');
        const data = await pb.collection('Notes').getFullList({sort: '+created'});
          
        console.log('Successfully fetched notes:', data);
        return data;
      } catch (error) {
        console.error('Error fetching notes:', error);
        throw error; 
      } 
}

const getNotes = async () => {
    
    const notes = await fetchNotes();

    return (
        <div>
            {notes?.map((note) => (
                <a key={note.id} href={`/notes/${note.id}`}>
                    <li key={note.id} className='mt-3 ml-4'>
                        <h3>Title: {note.Title}</h3>
                        <p>Content:"{note.Content}"</p>
                        <hr className='my-2'></hr>
                    </li>
                </a>
            ))}
        </div>
    )
}

export default getNotes;