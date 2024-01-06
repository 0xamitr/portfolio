'use client';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import "./page.css"
import Link from 'next/link'

export default function Blog(){
    const link = "http://localhost:5000/blog";
    const [auth, setAuth] = useState(false);
    const searchParams = useSearchParams()
    const key = searchParams.get('secretkey')
    const [data, setData] = useState([]);
    const getBlog = async()=> {
        try{
            const response = await fetch(link, {method: 'GET'});
            const body = await response.json();
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
        let formData = new FormData(event.target)
        formData = JSON.stringify(Object.fromEntries(formData));
        console.log((formData));
        try{
            const response = await fetch(link, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData,
            })
        }catch{
            console.log("failed");
        }
    }
    
    return(
        !auth ?
        <div className='blog-container'>
            {data.map(e => {
                return( 
                    <Link href={`/blog/${e.slug}`} className='blog'>
                        <h1>{e.heading}</h1>
                        <p>{e.content}</p>
                    </Link>
                )
            })}
        </div>
        :
        <form id="form" onSubmit={handleSubmit}>
            <label>
                <input name="heading" type="text" required/>
            </label>
            <label>
                <textarea name="content" type="text" required/>
            </label>
            <button id="btn" type="submit">Submit</button>
        </form>
    )
}