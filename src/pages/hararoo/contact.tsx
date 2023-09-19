import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'

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
      <Footer/>
     </div>
        
    </>
  )
}
