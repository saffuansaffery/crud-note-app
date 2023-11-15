import PocketBase from 'pocketbase';

const createNotes = async () => {

    var title = "";
    var content = "";

    function setTitle(e){
        title = e.target.value;
    }

    function setContent(e){
        content = e.target.value;
    }

    async function createNote(){
        const data = {
            "Title": {title},
            "Content": {content}
        };
        const pb = new PocketBase('http://127.0.0.1:8090');
        const record = await pb.collection('Notes').create(data);
    }    

    return (
        <div>
            <form onSubmit={createNote}> 

                <label>Title: </label>
                <input id='title' type = 'text' value={title} placeholder="Enter a title" 
                onChange={e => setTitle(e.target.value)}></input>

                <label>Content: </label>
                <textarea id='content' value={content} placeholder="Write your content" 
                onChange={e => setContent(e.target.value)}></textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default createNotes;