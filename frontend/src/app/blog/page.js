'use client';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import "./page.css"
import Link from 'next/link'

export default function Blog(){
    const link = process.env.API_URL + "/blog";
    const [auth, setAuth] = useState(false);
    const searchParams = useSearchParams()
    const key = searchParams.get('secretkey')
    const [data, setData] = useState([]);
    const getBlog = async()=> {
        try{
            console.log(link)
            const response = await fetch(link, {method: 'GET', mode: 'no-cors'});
            const body = await response.json();
            setData(body);
        }catch{
            console.log("can't catch");
        }
    }
    const funcauth = ()=>{
        setAuth(true);
    }
    useEffect(()=>{
        if(key == "hello"){
            funcauth();
        }
        getBlog();
    });
    
    const handleSubmit = async(event)=> {
        event.preventDefault();
        let formData = new FormData(event.target)
        formData = JSON.stringify(Object.fromEntries(formData));
        console.log((formData));
        try{
            const response = await fetch(link, {
                method: 'POST',
                mode: 'no-cors',
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
                    <Link key={e.slug} href={`/blog/${e.slug}`} className='blog'>
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