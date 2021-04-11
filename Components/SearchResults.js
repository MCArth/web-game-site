import GameAdvert from './GameAdvert';
import gameList from '../GameList.json'
import Description from './Description';
import { useWindowSize } from './hooks'
import React, {useState} from 'react';
import Link from 'next/link'

function searchResults({searchQuery}) {
    const {width: windowWidth} = useWindowSize()

    const [searchData, setSearchData] = useState(null);
    const [search, setSearch] = useState(false);

    function getSearchData(val){
        setSearchData(val.target.value)
    }

    // Loop through all games we have and check if searchquery is in the list
    //if (gameList.inclues(searchQuery.toLowerCase())){
    //    foundResults=true;
    //    //loop through and add correct elements to array 
    //    <h>Test</h>
    //}

    const minContentWidth = 315;
    return <div className="LandingPage">
        <div className="HeaderDiv Title">
            <div className="Header">
                Mine and Craft Games .com
            </div>
        </div>
        <div className="ContentDiv">
            {/*<PopularGames minWidth={minContentWidth} />*/}
            <listResults searchQuery={searchQuery} />
            <MoreGames minWidth={minContentWidth} />
        </div>
        {/*<Description />*/}
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
                .LandingPage {
                }
                .HeaderDiv {
                    width: 100%;
                    font-size: 50px;
                    text-align: center;
                    padding-bottom: 20px;
                    margin-bottom: 40px;
                    padding-top: 20px;
                    background-color: #1B1B1B;
                }
                .ContentDiv {
                    display: flex;
                    justify-content: center;
                    flex-wrap: ${windowWidth && document.body.clientWidth >= minContentWidth*2 ? "" : "wrap"};
                }
            `}
        </style>
    </div>
}

function listResults({searchQuery}){
    return (
        <h1>{searchQuery}</h1>
    )
}


function PopularGames({minWidth}) {
    const games = new Array(50).fill('Default')

    // Need a way to loop through and add all existing games from GameList.json
    games[0] = ('BloxdHop');
    games[1] = ('IslandSurvival');
    games[2] = ('MineBox');
    games[3] = ('BlockWorld');
    games[4] = ('MineClone');
    games[5] = ('MineCraftIO');

    return (
        <div className="PopularGames">
            <div className="PopularGamesHeader Title">
                Popular Games
            </div>
            <div className="PopularGamesAdverts">
                {games.map((game, idx) => {
                    return <GameAdvert
                        key={idx}
                        game={game}
                    />
                })}
            </div>
            <style jsx>
                {`
                    .PopularGames {
                        min-width: ${minWidth}px;
                        background-color: var(--primaryShaded1);
                        padding: 5px;
                        padding-top: 20px;
                        margin: 10px;
                        border-radius: 10px;
                        height: fit-content;
                    }
                    .PopularGamesAdverts {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                    .PopularGamesHeader {
                        text-align: center;
                        font-size: 30px;
                        margin-bottom: 20px;
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


export default searchResults
  