import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

const YourComponent = () => (
    <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Your Name"
    />
)

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Script>
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            </Script>
            <h1>First Post</h1>
            <YourComponent></YourComponent>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}