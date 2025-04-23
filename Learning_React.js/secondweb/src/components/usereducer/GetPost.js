import { useEffect,useReducer, useState } from "react";

export default function GetPost(){
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState('');
    const [post,setpost]=useState({});

    useEffect(() => {
 
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((data) => {
            setloading(false);
            setpost(data);
            seterror('');
        })

        .catch(err=>{
            setloading(false);
            setpost({});
            seterror('There was a problem');
        })

    }, []);
    let res='';

    // for (let key in post) {
    //     res += `${key} : ${post[key]}<br>`;
    // }
    
    return(

        <>
            {loading?'loading...':post.title};
            {error?error:null};
        </>
    );
    
}