import GameAdvert from '../Components/GameAdvert';
import Link from 'next/link'

function gamepage() {


  return (
    <div className="GamePage" style={{ minHeight: '100vh' }}>
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
      <div className="ContentDiv" >
          <AdverticementLeft/>
          <SelectedGame />
          <MoreGames />
      </div>
      <div className="info">
        <h1>info about game here::</h1>
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
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                  grid-gap: 20px;
              }
              .info {
                padding-top: 40px;
                text-align: center;
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
              [Name Of Game]
          </div>
          <div className="SelectedGameBox">

            <iframe src="https://www.gameflare.com/embed/the-island-survival/" left="0" frameBorder="0" scrolling="no" width="1000" height="635" allowFullScreen></iframe>

          </div>
          <style jsx>
              {`
                  .SelectedGameContainer {
                      min-width: 300px;
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
  const games = new Array(6).fill('BloxdHop')
  return (
      <div className="MoreGames">
          <div className="MoreGamesHeader">
              More Games or ads here?
          </div>
          {games.map((game, idx) => {
                  return <GameAdvert
                      key={idx}
                      game={game}
                  />
              })}
          <style jsx>
              {`
                  .MoreGames {
                    min-width: 100px;
                    position: absolute;
                    left: 0px;
                    padding-left: 10px;
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
