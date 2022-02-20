

export default function quotebox({ quote, author }) {
    return (
        <>
            <div>
                <blockquote>
                    <p>{quote}</p>
                    <cite>{author}</cite>
                </blockquote>
            </div>
        </>
    )
}