import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Navigate from '../../components/Navigate';
import HeaderPage from '../../components/HeaderPage';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
    
      <div>
      <HeaderPage/>
      <Navigate/>
          hi.. SERVICE
      <Footer/>
     </div>
        
    </>
  )
}
