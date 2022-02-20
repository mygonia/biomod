import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import Dnabackground from '@components/dnaBackground'
import Quotebox from '@components/quotebox'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BIOMOD Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dnabackground></Dnabackground>
      <img id="shouldersOfGiants" src="/images/shouldersOfGiants.png"></img>
      <main>
        <Header title="[Title of BIOMOD Project]" />
        <p className="description">
          Some interesting <code>tagline</code>
        </p>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
        <Quotebox quote="If I have seen further it is by standing on the shoulders of Giants." author="Isaac Newton"/>
      </main>

      <Footer />
    </div>
  )
}
