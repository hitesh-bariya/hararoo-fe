import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'
const HomePage=dynamic(()=>import('../components/Navigate'));
const HeaderPage=dynamic(()=>import('../components/HeaderPage'));
const Footer=dynamic(()=>import('../components/Footer'));

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <HeaderPage/>
     <HomePage/>
     <div className="hero-image">
        <div className="hero-text">
            <p>And I'm a Photographer</p>
            <button>Hire me</button>
        </div>
    </div>
    <div className="hero-image">
        <div className="hero-text">
            <p>And I'm a Photographer</p>
            <button>Hire me</button>
        </div>
    </div>
    <Footer/>
    </>
  )
}
