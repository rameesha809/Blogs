import { useEffect } from "react"
import { useState } from "react";
const useFetch=(url)=>{
    const isAbort = new AbortController();
    const [data,setData]=useState(null);
    const [isPending,setisPending]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
        .then(res=>{ 
            if(!res.ok){
                throw Error('Gotcha');
            }
            return res.json();
        }).then(data =>{
            console.log(data)
            setData(data);
            setisPending(false);
            setError(null);
        })
        .catch((err)=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
                setisPending(false);

            }

        })
        },1000)
        return ()=> isAbort.abort();
    },[url])

    return {
        data,isPending,error
    }

}
export default useFetch;