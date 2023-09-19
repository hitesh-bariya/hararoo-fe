import { Inter } from 'next/font/google'
import Link from 'next/link';

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
      <div data-wow-delay="0.5s">
        <h1>We Help To Get The Best Job And Find A Talent</h1>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <p>Tempor erat elitr rebum at clita</p>
        <p>Aliqu diam amet diam et eos</p>
        <p>Clita duo justo magna dolore erat amet</p>
        <Link className="btn btn-primary py-3 px-5 mt-3" href="">Read More</Link>
      </div>
      <div className="hero-image">
        <div className="hero-text">
            <p>And I'm a Photographer</p>
            <button>Hire me</button>
        </div>
      </div>
      <div data-wow-delay="0.5s">
        <h1>We Help To Get The Best Job And Find A Talent</h1>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <p>Tempor erat elitr rebum at clita</p>
        <p>Aliqu diam amet diam et eos</p>
        <p>Clita duo justo magna dolore erat amet</p>
        <Link className="btn btn-primary py-3 px-5 mt-3" href="">Read More</Link>
      </div>
      <Footer/>
     </div>
        
    </>
  )
}
