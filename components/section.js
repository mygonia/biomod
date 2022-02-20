import styles from './section.module.css'
import Footer from '@components/Footer'
import Head from 'next/head'
import Layout from '@components/layout'
import Link from 'next/link'
import Dnabackground from '@components/dnaBackground'

export default function FirstPost({ title, nextpage, additionalInfo }) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Dnabackground></Dnabackground>
            <h1>{title} - <Link href="/"><a>Home</a></Link></h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link> | 
                <Link href={"/sections/" + nextpage}>
                    <a>{nextpage} {additionalInfo}</a>
                </Link>
            </h2>
            <Footer/>
        </Layout>
    )
}