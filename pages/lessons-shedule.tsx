import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/header";
import LessonsShedule from '../components/lessons-shedule'
import GoUp from '../components/goUp'


const LessonsShedules: NextPage = () => {
  
  return (
    <div  >
      <div><Head>
        <title>Ukrainian cultural community</title>
        <meta name="description" content="Ukrainian cultural community" />
        <link rel="icon" href="/dancers.svg" />
      </Head>
        <main>LessonsShedule
          <Header />
          <div className='container'>
            <LessonsShedule />
          </div>
        </main>
        <footer>
        </footer>
        <GoUp />
      </div>
    </div>
  )
}

export default LessonsShedules
