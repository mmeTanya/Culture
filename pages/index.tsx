import type { NextPage } from 'next'
import Head from 'next/head'
import MobileNav from "../components/mobile-nav";
import Clouds from '../components/clouds'
import Hero from '../components/hero'
import GoUp from '../components/goUp'


const Home: NextPage = () => {


  return (
    <div className='overlay' >
      <Clouds />
      <Head>
        <title>Свято-Вознесенська парафія</title>
        <meta name="description" content="Свято-Вознесенська парафія, Українська православна церква Київського Патріархату" />
        <link rel="icon" href="/Ukrainian_Orthodox_Church_emblem.png" />
      </Head>
      <div className='container'>
        <main>
          <MobileNav />
          <Hero />
        </main>
        <footer>
        </footer>
      </div>
      <GoUp />
    </div>
  )
}

export default Home
