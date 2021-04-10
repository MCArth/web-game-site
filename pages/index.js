import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from '../Components/LandingPage.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage />
      </main>
      <style jsx>
        {`
          div {
            background-color: #333333;
          }
        `}
      </style>
    </div>
  )
}
