import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/header";
import Form from '../components/form-order'
import Contacts from '../components/contacts'
import GoUp from '../components/goUp'


const Contact: NextPage = () => {


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
            <Contacts />
            <Form />
          </div>
        </main>
        <footer>
        </footer>
        <GoUp />
      </div>
    </div>
  )
}

export default Contact
