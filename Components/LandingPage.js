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
            {games.map((game, idx) => {
                return <GameAdvert
                    key={idx}
                    game={game} 
                />
            })}
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
            {games.map((game, idx) => {
                return <GameAdvert
                    key={idx}
                    game={game}
                />
            })}
        </div>
    )
}
  
export default LandingPage
  