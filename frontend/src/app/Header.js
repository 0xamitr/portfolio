import Link from "next/link"
import "./page.css"

export default function Header(){
    return (
        <header>
            <Link className='blog' href='/blog'>
                <h3>Blog</h3>
            </Link>
        </header>
    )
}
