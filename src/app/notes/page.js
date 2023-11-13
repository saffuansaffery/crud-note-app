import PocketBase from 'pocketbase'

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'


async function getNotes(){
    try {
        const db = new PocketBase('http://127.0.0.1:8090');
        const data = await db.collection('Notes').getFullList();
        // const fakeData = {
        //     "Title": "2nd test",
        //     "Content": "test
        // };
        
        // const record = await db.collection('Notes').create(fakeData);
        // console.log(fakeData)   
        console.log('Successfully fetched notes:', data);
        return data;
      } catch (error) {
        console.error('Error fetching notes:', error);
        throw error; // Rethrow the error to propagate it further
      }
    
    
}

export default async function NotesPage(){
    const notes = await getNotes();

    return(
        <div>
            <ul>
                {notes?.map((note) => (
                    <a href={`/notes/${note.id}`}>
                        <li key={note.id} className='mt-3 ml-4'>
                            <h3>Title: {note.Title}</h3>
                            <p>Content:"{note.Content}"</p>
                            <hr className='my-2'></hr>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
}

