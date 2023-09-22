import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Clouds from '../components/neclace'
import AboutSermons from '../components/aboutSermons'
import Footer from '../components/footer'
import GoUp from '../components/goUp'


const Sermons: NextPage = () => {

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

export default Sermons