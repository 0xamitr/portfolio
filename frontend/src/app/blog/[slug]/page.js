'use client';
import { useEffect, useState } from "react"
import './page.css'

export default function BlogPage({params}){
    const [data, setData] = useState([]);
    const link = process.env.API_URL + `/blog/${params.slug}`;
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
        <div className="blog-content">
            <h1>{data.heading}</h1>
            <p className="content">{data.content}</p>
        </div>
    )
}