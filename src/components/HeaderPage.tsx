import * as React from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function HeaderPage(props:any){
    return (
        <nav className="">
        <Link href="/">
            <h1 className="">Hararoo It Solution</h1>
        </Link>
    </nav>
    )
}