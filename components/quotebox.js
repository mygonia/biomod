import styles from './quotebox.module.css'

export default function quotebox({ quote, author }) {
    return (
        <>
            <div className={styles.animated-border-quote}>
                <blockquote>
                    <p>{quote}</p>
                    <cite>{author}</cite>
                </blockquote>
            </div>
        </>
    )
}