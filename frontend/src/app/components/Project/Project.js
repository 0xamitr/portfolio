
export default function Project({link, text, codelink}){
    return(
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <a href={link} target="_blank">
                <h3>{text}</h3>
            </a>
            <a href="codelink"><p>code</p></a>
        </div>
    )
}