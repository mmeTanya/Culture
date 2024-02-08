import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/header";
import Neclace from '../components/neclace'
import Hero from '../components/hero'
import Community from '../components/community'
import Rewiews from '@/components/rewiews';
import GoUp from '../components/goUp'


const Home: NextPage = () => {


  return (
    <div  >
      <div><Head>
        <title>Ukrainian cultural community</title>
        <meta name="description" content="Ukrainian cultural community" />
        <link rel="icon" href="/dancers.svg" />
      </Head>
        <main>
          <Header />
          <div className='container'>
            <Neclace />
            <Hero />
          </div>
          <Community />
          <Rewiews  />
        </main>
        <footer>
        </footer>
        <GoUp />
      </div>
    </div>
  )
}

export default Home
