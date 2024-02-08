import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/community'
import Gallery1 from '../components/rewiews'
import GoUp from '../components/goUp'
import Footer from '../components/footer'

const Parish: NextPage = () => {

  return (
    <div className='overlay' >
      <Head>
        <title>Ukrainian cultural community</title>
        <meta name="description" content="Ukrainian cultural community" />
        <link rel="icon" href="/dancers.svg" />
      </Head>
      <main>
        <Header />
        {/* <Gallery1 /> */}
        <Hero />
      </main>
      <footer>
        <Footer />
      </footer>

      <GoUp />
    </div>
  )
}

export default Parish
