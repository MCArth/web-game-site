import GameAdvert from '../Components/GameAdvert';
import Link from 'next/link'

function gamepage() {
  return (
    <div className="GamePage" style={{ minHeight: '100vh'}}>
      <div className="HeaderDiv">
        <div className="Header">
          Mine and Craft Games
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
      <div className="ContentDiv">
          <SelectedGame />
          <MoreGames />
      </div>
      <style jsx>
          {`
              div {
                  color: white;
                  text-align: center;
                  background-color: #333333;
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
              }
          `}
      </style>
  </div>
  )
}


function SelectedGame({}) {
  const games = new Array(1).fill('BloxdHop')
  return (
      <div className="SelectedGameContainer">
          <div className="SelectedGameHeader">
              [Name Of Game]
          </div>
          <div className="SelectedGameBox">
            <iframe src="https://www.gameflare.com/online-game/cartoon-strike/" style={{
              width: '800px', height: '600px', border: '0px', left: '400px'}}></iframe>

          </div>
          <style jsx>
              {`
                  .SelectedGameContainer {
                      min-width: 300px;
                      background-color: #333333;
                  }
                  .SelectedGameBox {
                      display: relative;
                      height: 400px;
                      width: 400px;
                      flex-direction: row;
                      flex-wrap: wrap;
                      justify-content: center;
                  }
                  .SelectedGameHeader {
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
                      min-width: 300px;
                      position: absolute;
                      right: 0px;
                      padding: 10px;
                      background-color: #333333;
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

export default gamepage;
