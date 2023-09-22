import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react';
import Head from 'next/head'
import Header from '../../components/header'
import Clouds from '../../components/neclace'
import NewsItem from '../../components/newsItem'
import Footer from '../../components/footer'
import GoUp from '../../components/goUp'


export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

const NewsItemPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    console.log(id)
  }, []);



  return (
    <div className='overlay' >
      <Clouds />
      <Head>
      <title>Ukrainian cultural community</title>
      <meta name="description" content="Ukrainian cultural community" />
      <link rel="icon" href="/dancers.svg" />
      </Head>
      <div className='container'>
        <main>
          <Header />
          <NewsItem newsId={id} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <GoUp />
    </div>
  )
}

export default NewsItemPage
