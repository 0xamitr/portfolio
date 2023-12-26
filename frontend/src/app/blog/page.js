'use client';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import "./page.css"

export default function Blog(){
    const link = "http://localhost:5000";
    const [auth, setAuth] = useState(false);
    const searchParams = useSearchParams()
    const key = searchParams.get('secretkey')
    const [data, setData] = useState([]);
    const getBlog = async()=> {
        try{
            const response = await fetch(link, {method: 'GET'});
            const body = await response.json();
            console.log(body);
            setData(body);
        }catch{
            console.log("can't catch");
        }
    }
    useEffect(()=>{
        if(key == "hello"){
            setAuth(true);
        }
        getBlog();
    }, [])
    
    const handleSubmit = async(event)=> {
        event.preventDefault();
        const formData = new FormData(event.target)
        try{
            const response = await fetch(link, {
                method: 'POST',
                body: formData,
            })
            console.log(response);
        }catch{
            console.log("failed");
        }
    }
    
    return(
        !auth ?
        <>
            {data.map(e => {
                return <div className='hello'>
                    <h1>{e.heading}</h1>
                    <p>{e.content}</p>
                </div>
            })}
               
        </>
        :
        <form onSubmit={handleSubmit}>
            <label>
                <input name="heading" type="text"/>
            </label>
            <label>
                <input name="content" type="text"/>
            </label>
            <button id="btn" type="submit">Submit</button>
        </form>
    )
}