import styles from './section.module.css'
import Footer from '@components/Footer'
import Head from 'next/head'
import Layout from '@components/layout'
import Link from 'next/link'

export default function FirstPost({ title, nextpage }) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title} - <Link href="/"><a>Home</a></Link></h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link> |
                <Link href={"/sections/" + nextpage}>
                    <a>{nextpage}</a>
                </Link>
            </h2>
            <Footer/>
        </Layout>
    )
}