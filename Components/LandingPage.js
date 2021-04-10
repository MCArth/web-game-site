import gameList from '../GameList.json'
import GameAdvert from './GameAdvert';

function LandingPage({ Component, pageProps }) {
    return <div className="LandingPage">
        <div className="HeaderDiv">
            <div className="Header">
                Mine and Craft Games
            </div>
        </div>
        <div className="ContentDiv">
            <PopularGames />
            <NewGames />
        </div>
        <style jsx>
            {`
                div {
                    color: white;
                    text-align: center;
                }
                .HeaderDiv {
                    width: 100%;
                    font-size: 50px;
                    text-align: center;
                    margin-bottom: 30px;
                    margin-top: 20px;
                }
                .ContentDiv {
                    display: flex;
                    justify-content: center;
                    {/* flex-wrap: wrap; */}
                }
            `}
        </style>
    </div>
}



function PopularGames({}) {
    const games = new Array(50).fill('BloxdHop')
    console.log(games)
    return (
        <div className="PopularGames">
            <div className="PopularGamesHeader">
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
                        min-width: 300px;
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

function NewGames({}) {
    const games = new Array(10).fill('BloxdHop')
    console.log(games)
    return (
        <div className="NewGames">
            <div className="NewGamesHeader">
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
                        min-width: 300px;
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
  