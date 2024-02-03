import "./Projects.css"
import Project from "../Project/Project";

export default function Projects(){
    return(
        <div className="projects">
            <h1>PROJECTS</h1>
            <Project link={"https://www.amitrathore.in"} text={"project1"}/>
            <Project link={"https://chess-node-production.up.railway.app/"} text={"project2"}/>
            <Project link={"https://thethirdfront.vercel.app/"} text={"project3"}/>
        </div>
    )
}