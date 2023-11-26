import Link from "next/link"
import "./page.css"

export default function Home() {
  return (
    <>
      <header>
        <Link href='/blog'>
        <h3>Blog</h3>
        </Link>
      </header>
      <main>
        <h1>Hi, This is Amit</h1>
      </main>
    </>
  )
}
