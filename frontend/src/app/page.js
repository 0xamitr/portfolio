import "./page.css"
import Projects from "./components/Projects/Projects"

export default function Home() {
  return (
    <>
      <div id="div-whatever">
        <h1 className="name">Hi, This is Amit</h1>
        <Projects/>
      </div>
    </>
  )
}