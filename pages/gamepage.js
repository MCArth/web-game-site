import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from '../Components/LandingPage.js'
import TopHeader from './../Components/header.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <TopHeader />

      <div className="page-box">
          <h1>GamePage</h1>
          
          <div className="game-name">
            <h2>NameOfGame</h2>
          </div>

          <div className="game-container">
              <p>game goes here</p>
          </div>
          
      </div>

    </div>
  )
}
