import Link from "next/link"
import "../../page.css"

export default function Header(){
    return (
        <header>
            <Link href='/'>
                <h2>Home</h2>
            </Link>
            <Link href='/blog'>
                <h2>Blog</h2>
            </Link>
        </header>
    )
}
