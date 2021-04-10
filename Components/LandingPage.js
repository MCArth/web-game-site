import GameAdvert from './GameAdvert';
import Description from './Description';
import { useWindowSize } from './hooks'

function LandingPage({ Component, pageProps }) {
    const {width: windowWidth} = useWindowSize()

    const minContentWidth = 315;
    return <div className="LandingPage">
        <div className="HeaderDiv Title">
            <div className="Header">
                Mine and Craft Games .com
            </div>
        </div>
        <div className="ContentDiv">
            <PopularGames minWidth={minContentWidth} />
            <NewGames minWidth={minContentWidth} />
        </div>
        <Description />
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



function PopularGames({minWidth}) {
    const games = new Array(50).fill('BloxdHop')
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

function NewGames({minWidth}) {
    const games = new Array(10).fill('BloxdHop')
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
  