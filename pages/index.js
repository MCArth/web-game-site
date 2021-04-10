import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from '../Components/LandingPage.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MineandCraftGames.com</title>
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
          {/* h1 {
                --shadowColour: rgb(0, 120, 189);
                font-family: pixel-font;
                text-shadow 0.1em 0.1em 0 var(--shadowColour),
                    0.1em -0.1em 0 var(--shadowColour),
                    -0.1em 0.1em 0 var(--shadowColour),
                    -0.1em -0.1em 0 var(--shadowColour),
                    0 0.1em 0 var(--shadowColour),
                    0 -0.1em 0 var(--shadowColour),
                    0.1em 0 var(--shadowColour),
                    -0.1em 0 var(--shadowColour);
            } */}
        `}
      </style>
    </div>
  )
}
