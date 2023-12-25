'use client';
import "./page.css"
export default function Blog(){
    const handleSubmit = async(event)=> {
        const link = "http://localhost:5000";
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
        <>
            <h1>This is a motherfucking blog</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input name="heading" type="text"/>
                </label>
                <label>
                    <input name="content" type="text"/>
                </label>
                <button id="btn" type="submit">Submit</button>
            </form>
        </>
    )
}