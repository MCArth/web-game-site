import GameAdvert from '../Components/GameAdvert';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/Image';
//import { useWindowSize } from './hooks'

var linkToGame = "https://www.gameflare.com/embed/the-island-survival/";
var linkToGame2 = "https://www.gameflare.com/embed/mine-box/";
var nameOfGame = "The Island Survival";
var DescriptionOfGame = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida enim nulla, efficitur pharetra lorem semper vel. Duis eu convallis est, vitae facilisis arcu. Nulla quis lectus eu massa tristique auctor quis quis sem. Nunc nunc orci, pharetra ut vestibulum at, mattis in lorem. In augue neque, pretium eu sem in, efficitur egestas nulla. Sed condimentum eget est vitae placerat. In efficitur fermentum libero in imperdiet. Aliquam dolor ipsum, ultrices at tempor ac, interdum sit amet orci. Nullam eget purus ac velit semper lobortis. Aenean accumsan odio ut nisi fringilla, dignissim auctor est placerat. Sed scelerisque nunc nec pellentesque convallis. Phasellus blandit ornare enim vitae commodo. Vivamus non consequat lorem, a finibus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent pellentesque pulvinar enim, eget maximus massa luctus non. Morbi maximus facilisis neque, a efficitur massa malesuada ac. Maecenas imperdiet purus purus, vel rutrum mauris fringilla ut. Donec et scelerisque elit. Fusce malesuada est at lacus auctor, et pellentesque nibh cursus. Nunc dui nisl, sagittis a lorem id, iaculis vulputate odio. In magna tellus, tincidunt quis erat vel, auctor fringilla orci. Proin nec vehicula felis.";

var visible = true;

function gamepage() {
  //const {width: windowWidth} = useWindowSize()

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
            <SelectedGame />
            <MoreGames/></>) : 
            <><SelectedGame /></>}
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


function SelectedGame({}) {
  
  return (
      <div className="SelectedGameContainer">
          <div className="SelectedGameHeader">
              {nameOfGame}
          </div>
          <div className="SelectedGameBox">

            <iframe src={linkToGame} left="0" frameBorder="0" scrolling="no" width="1200" height="660" allowFullScreen></iframe>

          </div>
          <div className="game-description">
            <h1>Information about {nameOfGame}: </h1>
            <h3>Struggling to give it a max-width so it doesnt overlap</h3>
            <a>{DescriptionOfGame}</a>
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
          <Image src="/bathhack_vertical.png" alt="me" width="170" height="600" />
          <style jsx>
              {`
                .Ad {
                  min-width: 100px;
                  position: absolute;
                  left: 40px;
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
