'use client'
import { useEffect, useState } from "react"

export default function BlogPage({params}){
    const [data, setData] = useState([]);
    const link = `http://localhost:5000/blog/${params.slug}`;
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
        getBlog();
    }, [])
    return(
        <div>
            <h1>{data.heading}</h1>
            <p>{data.content}</p>
        </div>
    )
}