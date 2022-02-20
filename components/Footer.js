import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <img id="shouldersOfGiants" src="/images/shouldersOfGiants.png"></img>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> from  <em>McMaster University in Hamilton, Ontario</em>  for you
      </footer>
    </>
  )
}
