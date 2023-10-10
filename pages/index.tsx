import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/header";
import Neclace from '../components/neclace'
import Hero from '../components/hero'
import GoUp from '../components/goUp'


const Home: NextPage = () => {


  return (
    <div  >
      <div><Head>
      <title>Ukrainian cultural community</title>
        <meta name="description" content="Ukrainian cultural community" />
        <link rel="icon"href="/dancers.svg"  />
      </Head>
        <main>
         <Header />
          <div className='container'>
            <Neclace />
            <Hero />
          </div>
        </main>
        <footer>
        </footer>
        <GoUp />
        </div>
    </div>
  )
}

export default Home
