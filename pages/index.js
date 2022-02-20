import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import Dnabackground from '@components/dnaBackground'
import Quotebox from '@components/quotebox'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BIOMOD Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dnabackground></Dnabackground>
      <motion.img initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .5,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        },
      }} id="shouldersOfGiants" src="/images/shouldersOfGiants.png">
      </motion.img>
      <main>
        <Header title="[Title of BIOMOD Project]" />
        <p className="description">
          Some interesting <code>tagline</code>
        </p>
        <h1 className="title">
          Watch{' '}
          <Link href="/posts/first-post">
            <a>our video!</a>
          </Link>
        </h1>
        <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .5,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        },
      }}>
          <Quotebox quote="If I have seen further it is by standing on the shoulders of Giants." author="Isaac Newton"/>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
