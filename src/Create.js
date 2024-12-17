import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle]= useState('hi')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('mario')
    const [isPending,setisPending]=useState(false)
    const history = new useHistory()
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog={title,body,author}
        setisPending(true)
        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("added");
            setisPending(false);
            history.push('/');
    })
    }
    return ( 
        <div className="create">
            <h2>Add Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Add title: 
                </label>
                <input 
                type="text"
                required
                value={title}
                onChange = {(tt) => setTitle(tt.target.value)}
                />
                <label>Add blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>
                    Aauthor: 
                </label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                    
                </select>
                {isPending && <button disabled>Adding blog.....</button>}
                {!isPending && <button>Add blog</button>}
            </form>
            <p>{title}</p> 
            <p>{body}</p> 
            <p>{author}</p> 
        </div>
    
     );
}
 
export default Create;