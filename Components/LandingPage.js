import GameAdvert from './GameAdvert';
import Description from './Description';
import { useWindowSize, useAdState } from './hooks'
import gameList from '../GameList.json'


function LandingPage({ Component, pageProps }) {
    const {width: windowWidth} = useWindowSize()

    const minContentWidth = 315;
    return <div className="LandingPage">
        <div className="ContentDiv">
            <PopularGames minWidth={minContentWidth} />
            <NewGames minWidth={minContentWidth} />
        </div>
        <Description />
        <style jsx global>
            {`
                .ContentDiv {
                    display: flex;
                    justify-content: center;
                    flex-wrap: ${windowWidth && document.body.clientWidth >= minContentWidth*2 ? "" : "wrap"};
                }
            `}
        </style>
    </div>
}



function PopularGames({minWidth}) {

    var length = 50;
    const games = new Array(length).fill('Default');
    const adState = useAdState();
    
    var i = 0;
    var firstRun = true;
    for (var key of Object.keys(gameList)) {
        if (firstRun){
            firstRun = false;
            continue;
        }
        games[i] = key;
        i++;
    }



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
                        adState={adState}
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

function NewGames({minWidth}) {
    var length = 10;
    const games = new Array(length).fill('Default');
    const adState = useAdState();
    
    var i = 0;
    var firstRun = true;
    for (var key of Object.keys(gameList)) {
        if (firstRun){
            firstRun = false;
            continue;
        }
        games[i] = key;
        i++;
    }

    return (
        <div className="NewGames">
            <div className="NewGamesHeader Title">
                New games
            </div>
            <div className="NewGamesAdverts">
                {games.map((game, idx) => {
                    return <GameAdvert
                        key={idx}
                        game={game}
                        adState={adState}
                    />
                })}
            </div>
            <style jsx>
                {`
                    .NewGames {
                        min-width: ${minWidth}px;
                        background-color: var(--primaryShaded1);
                        padding: 10px;
                        border-radius: 10px;
                        margin: 10px;
                        margin-left: 0;
                        height: fit-content;
                    }
                    .NewGamesAdverts {
                        display: flex;
                        flex-direction: column;
                    }
                    .NewGamesHeader {
                        font-size: 30px;
                        margin-bottom: 20px;
                    }
                `}
            </style>
        </div>
    )
}

  
export default LandingPage
  