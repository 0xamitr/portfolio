"use client"
import "./Projects.css"
import { useEffect, useRef, useState} from "react";

export default function Projects(){
    const [status, setStatus] = useState(false);
    const elementRef = useRef(null);
    const handleScroll = ()=> {
        if(window.scrollY+400 > elementRef.current.offsetTop){
            console.log("ok");
            setStatus(true);
        }
        else{
            setStatus(false);
        }
      }
      useEffect(()=>{
        handleScroll();
        window.addEventListener('scroll', handleScroll);
      })
    return(
        <div ref={elementRef} className="projects">
            <h1>PROJECTS</h1>
            <div className="project-container">
                <div className={"project " + (status ? "project1" : "")}></div>
                <div className={"project " + (status ? "project2" : "")}></div>
                <div className={"project " + (status ? "project3" : "")}></div>
            </div>
        </div>
    )
}