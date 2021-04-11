import GameAdvert from './GameAdvert';
import gameList from '../GameList.json'
import Description from './Description';
import { useWindowSize } from './hooks'
import React, {useState} from 'react';
import Link from 'next/link'

function searchResults({searchQuery}) {
    const {width: windowWidth} = useWindowSize()

    /*const [searchData, setSearchData] = useState(null);
    const [search, setSearch] = useState(false);

    function getSearchData(val){
        setSearchData(val.target.value)
    }*/

    // TODO: Pass-through props-value and assign it to searchQuery

    console.log(searchQuery);


    var foundWord = false;
    var searchWord = "Mine";
    /*gameList.forEach(doc => {
        if (doc.toLowerCase().includes(searchWord.toLowerCase())){
            foundResult = true;
        }
    })*/





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
    // Loop through all games we have and check if searchquery is in the list
    //if (gameList.inclues(searchQuery.toLowerCase())){
    //    foundResults=true;
    //    //loop through and add correct elements to array 
    //    <h>Test</h>
    //}
    return <h1>{searchQuery}</h1>
}


function PopularGames({minWidth}) {
    
    var length = 50;
    const gamesInit = new Array(length).fill('Default');
    const adState = useAdState();
    var searchTerm = "i";
    
    var i = 0;
    var firstRun = true;
    for (var key of Object.keys(gameList)) {
        if (firstRun){
            firstRun = false;
            continue;
        }
        if (key.toLowerCase().includes(searchTerm.toLowerCase())){
            gamesInit[i] = key;
            i++;
            console.log('yes');
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

    return (
        <div className="PopularGames">
            <div className="PopularGamesHeader Title">
            Search results for ...
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
    var length = 6;
    const games = new Array(length).fill('Default');
    const adState = useAdState();
    
    var i = 0;
    var firstRun = true;
    for (var key of Object.keys(gameList)) {
        if (firstRun || key==game || i>=6) {
            firstRun = false;
            continue;
        }
        games[i] = key;
        i++;
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
  