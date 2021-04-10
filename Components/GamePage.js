import GameAdvert from '../Components/GameAdvert';
import Link from 'next/link'
import gameList from '../GameList.json'
import React from 'react';
import Image from 'next/Image';
import { useWindowSize } from './hooks'


var gameWidth = 1200;
var sideBar = 320;
var visible = true;

function gamepage({game}) {
  const {width: windowWidth} = useWindowSize();

  // NEED MORE EFFICIENT WAY OF DOING THIS
  if (windowWidth < (gameWidth + sideBar*2)){
    visible = false
  }
  else {
    visible = true;
  }
  if (windowWidth < gameWidth+100){
    gameWidth = windowWidth-60;
  }

  return (
    <div className="GamePage" >
      <div className="HeaderDiv Title">
        <div className="Header">
          Mine and Craft Games .com
        </div>
        <div className="SearchBar">
          <input placeholder={"Search for a game.."} />
            <button type="submit">Search</button>
        </div>
        <div className="goto-homepage">
          <button>
            <Link href="/">
              Go Back to the Homepage
            </Link>
          </button>
        </div>
      </div>
      <div className="ContentDiv" >
          {visible ? (<>
            <AdverticementLeft/>
            <SelectedGame game={game} />
            <MoreGames/></>) : 
            <SelectedGame game={game} />}
      </div>
      <style jsx global>
          {`
              @font-face {
                font-family: pixel-font;
                src: url('/PixelIntv-OPxd.ttf');
              }
              .Title {
                  font-family: pixel-font;
              }
              div {
                  color: white;
                  text-align: center;
              }
              .HeaderDiv {
                width: 100%;
                font-size: 50px;
                text-align: center;
                padding-bottom: 20px;
                padding-top: 20px;
                background-color: #1B1B1B;
            }
              .ContentDiv {
                  padding-top: 40px;
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                  grid-gap: 20px;
                  background-color: #333333;
              }
          `}
      </style>
  </div>
  )
}


function SelectedGame({game}) {

  return (
      <div className="SelectedGameContainer">
          <div className="SelectedGameHeader">
              {gameList[game].title}
          </div>
          <div className="SelectedGameBox">

            <iframe 
                src={gameList[game].url} 
                left="0" 
                frameBorder="0" 
                scrolling="no" 
                width={gameWidth}
                height="660" 
                allowFullScreen
                webkitallowfullscreen
                mozallowfullscreen
                msallowfullscreen
                allow="autoplay; fullscreen; microphone;"
            />

          </div>
          <div className="game-description">
            <h1>Information about {game}: </h1>
            <h3>Struggling to give it a max-width so it doesnt overlap</h3>
            <a>{gameList[game].desc}</a>
          </div>
          <div className="BathHack">
            <Image src="/bathhack_horizontal.png" alt="me" width="1052" height="240" />
          </div>
          <style jsx>
              {`
                  .SelectedGameContainer {
                      min-width: 800px;
                      justify-content: center;
                      position: center;
                  }
                  .SelectedGameBox {
                      display: center;
                  }
                  .SelectedGameHeader {
                      text-align: center;
                      font-size: 30px;
                      margin-bottom: 20px;
                  }
                  .game-description {
                    position: center;
                    text-align: center;
                    padding-top: 60px;
                    padding-bottom: 120px;
                  }
                  .BathHack {
                    background-color: var(--primaryShaded1);
                    padding: 5px;
                    padding-top: 20px;
                    margin: 10px;
                    border-radius: 10px;
                    height: fit-content;
                  }
              `}
          </style>
      </div>
  )
}

function MoreGames({}) {
  const games = new Array(6).fill('BloxdHop')
  return (
      <div className="MoreGames">
          <div className="MoreGamesHeader">
              More Games
          </div>
          <div className="MoreGamesAdverts">
              {games.map((game, idx) => {
                  return <GameAdvert
                      key={idx}
                      game={game}
                  />
              })}
          </div>
          <style jsx>
              {`
                  .MoreGames {
                    min-width: 100px;
                    position: absolute;
                    right: 0px;
                    padding-right: 10px;

                    background-color: var(--primaryShaded1);
                    padding: 5px;
                    padding-top: 20px;
                    margin: 10px;
                    border-radius: 10px;
                    height: fit-content;
                  }
                  .MoreGamesAdverts {
                      display: flex;
                      flex-direction: column;
                  }
                  .MoreGamesHeader {
                      font-size: 30px;
                      margin-bottom: 20px;
                  }
              `}
          </style>
      </div>
  )
}

function AdverticementLeft(){
  
  return (
      <div className="Ad">
          <Image src="/bathhack_vertical.png" alt="me" width="200" height="680" />
          <style jsx>
              {`
                .Ad {
                  min-width: 100px;
                  position: absolute;
                  left: 14px;
                  padding-left: 10px;

                  background-color: var(--primaryShaded1);
                  padding: 5px;
                  padding-top: 20px;
                  margin: 10px;
                  border-radius: 10px;
                  height: fit-content;
                }
              `}
          </style>
      </div>
  )
}

export default gamepage;