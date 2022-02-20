import Link from 'next/link'
import Image from 'next/image'

const YourComponent = () => (
    <Image
        src="https://raw.githubusercontent.com/cat-milk/Anime-Girls-Holding-Programming-Books/master/Javascript/Doma_Umaru_Java_Script_The_Good_Parts.png"
        height={144}
        width={144}
        alt="Holding a Javascript textbook"
    />
)

export default function FirstPost() {
    return (
        <>
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