'use client'
import { useEffect } from "react"

export default function BlogPage({params}){
    useEffect(()=>{
        console.log(params);
    }, [])
    return(
        <div>para</div>
    )
}