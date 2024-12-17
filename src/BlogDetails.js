import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const history= new useHistory()
    const {id}= useParams()
    const {data,error,isPending} = useFetch('http://localhost:3000/blogs/' + id)
    const handleDelete =()=>{
        fetch('http://localhost:3000/blogs/'+id, {
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>
                        {data.title}
                    </h2>
                    <p>
                        written by {data.author}
                    </p>
                    <p>
                        {data.body}
                    </p>
                    <button onClick={handleDelete}></button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;