import PocketBase from 'pocketbase';
import Fetch from './getNotes.js';
import Create from './createNotes.js';


export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

export default function NotesPage(){

    return(
        <div>
            <ul>
                <Fetch />
            </ul>
            <div>
                <Create />
            </div>
        </div>
    );
}

