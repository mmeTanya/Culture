import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../../components/header";
import News from '../../components/news'
import GoUp from '../../components/goUp'


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
            <News />
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
