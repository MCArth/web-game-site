import GameAdvert from './GameAdvert';
import gameList from '../GameList.json'
import Description from './Description';
import { useWindowSize, useAdState } from './hooks'
import React, {useState} from 'react';
import Link from 'next/link'

function searchResults(search) {
    const {width: windowWidth} = useWindowSize()
    
    var foundResults = false;
    var searchQuery = search.search;

    for (var key of Object.keys(gameList)) {
        if (key.toLowerCase().includes(searchQuery.toLowerCase())){
            foundResults = true;
        }
    }


    const minContentWidth = 315;
    return <div className="LandingPage">
        <div >
            {foundResults ? (
                <div>
                    <div className="ContentDiv">
                        <ListResults searchQuery={searchQuery} minWidth={minContentWidth}/>
                    </div> 
                </div>
            ) : (
                <div className="NoResultHeader Title">
                    Could not find any results for: <code>{searchQuery}</code>
                </div>
            )}
        </div>
        <div className="ContentDiv">
            <MoreGames minWidth={minContentWidth} searchQuery={searchQuery}/>
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
                .ResultsDiv{
                    width: 100%;
                    font-size: 40px;
                    text-align: center;
                    padding-bottom: 20px;
                    margin-bottom: 40px;
                    padding-top: 20px;
                    background-color: var(--primaryShaded1);
                    padding: 5px;
                    padding-top: 20px;
                    margin: 10px;
                    border-radius: 10px;
                }
                .ContentDiv {
                    display: flex;
                    justify-content: center;
                    flex-wrap: ${windowWidth && document.body.clientWidth >= minContentWidth*2 ? "" : "wrap"};
                }
                .searchResults {
                    width: 100%;
                    font-size: 30px;
                    text-align: center;
                    padding-bottom: 20px;
                    margin-bottom: 40px;
                    padding-top: 20px;
                }
                .NoResultHeader {
                    text-align: center;
                    font-size: 30px;
                    margin-bottom: 20px;
                }
            `}
        </style>
    </div>
}


function ListResults({searchQuery, minWidth}) {

    var minWidth = 315;
    
    var length = 50;
    const gamesInit = new Array(length).fill('Default');
    const adState = useAdState();
    
    var i = 0;
    var firstRun = true;
    for (var key of Object.keys(gameList)) {
        if (firstRun){
            firstRun = false;
            continue;
        }
        if (key.toLowerCase().includes(searchQuery.toLowerCase())){
            gamesInit[i] = key;
            i++;
        }
    }

    // Find length
    var arrayLength = 0;
    for (arrayLength; i < gamesInit.length; i++){
        if (gamesInit[arrayLength]=='Default'){
            continue;
        }
        arrayLength++;
    }

    const games = new Array(arrayLength);
    for (var i = 0; i < arrayLength; i++){
        games[i] = gamesInit[i];
    }

    var adId = 0;
    function nextAdId(){
        adId = adId + 1;
        return adId;
    }

    return (
        <div className="PopularGames">
            <div className="PopularGamesHeader Title">
            Results for: <code>{searchQuery}</code>
            </div>
            <div className="PopularGamesAdverts">
                {games.map((game, idx) => {
                    return <GameAdvert
                        key={idx}
                        game={game}
                        adState={adState}
                        adId={nextAdId()}
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

function MoreGames({minWidth, searchQuery}) {
    var length = 6;
    const games = new Array(length).fill('Default');
    const adState = useAdState();
    
    var i = 0;
    var firstRun = true;
    for (var key of Object.keys(gameList)) {
        if (firstRun || key==searchQuery ||i>=6) {
            firstRun = false;
            continue;
        }
        games[i] = key;
        i++;
    }

    var adId = 0;
    function nextAdId(){
        adId = adId + 1;
        return adId;
    }

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
                      adState={adState}
                      adId={nextAdId()}
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
  