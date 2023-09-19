import * as React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Navigate(props:any){
    const router = useRouter();
    return (
        <div className="topnav" id="navbarCollapse">
            <Link href="/" className={router.pathname == "/" ? "active" : ""}>Home</Link>
            <Link href="/hararoo/about" className={router.pathname == "/hararoo/about" ? "active" : ""}>About</Link>
            <Link href="/hararoo/contact" className={router.pathname == "/hararoo/contact" ? "active" : ""}>contact</Link>
            <Link href="/hararoo/service" className={router.pathname == "/hararoo/service" ? "active" : ""}>service</Link>
            <Link href="/hararoo/post-job" className={router.pathname == "/hararoo/post-job" ? "active" : ""}>Job Post</Link>
            <Link href="/hararoo/search-job" className={router.pathname == "/hararoo/search-job" ? "active" : ""}>Job Search</Link>
        </div>
    )
}