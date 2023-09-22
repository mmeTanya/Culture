import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Clouds from '../components/neclace'
import OnlineService from '../components/onlineServices'
import Footer from '../components/footer'
import GoUp from '../components/goUp'


const OnlineServices: NextPage = () => {

  return (
    <div className='overlay' >
    <Head>
    <title>Ukrainian cultural community</title>
        <meta name="description" content="Ukrainian cultural community" />
        <link rel="icon"href="/dancers.svg"  />
    </Head>
    <div className='container'>
      <main>
      <Header />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    <GoUp />
  </div>
  )
}

export default OnlineServices