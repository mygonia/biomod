import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
        <Image 
          src="/images/shouldersOfGiants.jpg"
          layout="responsive"
          alt="I see further because I stand on the shoulders of giants."
        />
      </main>

      <Footer />
    </div>
  )
}
