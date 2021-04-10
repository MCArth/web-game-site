import GameAdvert from '../Components/GameAdvert';
import Link from 'next/link'
import gameList from '../GameList.json'

var DescriptionOfGame = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida enim nulla, efficitur pharetra lorem semper vel. Duis eu convallis est, vitae facilisis arcu. Nulla quis lectus eu massa tristique auctor quis quis sem. Nunc nunc orci, pharetra ut vestibulum at, mattis in lorem. In augue neque, pretium eu sem in, efficitur egestas nulla. Sed condimentum eget est vitae placerat. In efficitur fermentum libero in imperdiet. Aliquam dolor ipsum, ultrices at tempor ac, interdum sit amet orci. Nullam eget purus ac velit semper lobortis. Aenean accumsan odio ut nisi fringilla, dignissim auctor est placerat. Sed scelerisque nunc nec pellentesque convallis. Phasellus blandit ornare enim vitae commodo. Vivamus non consequat lorem, a finibus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent pellentesque pulvinar enim, eget maximus massa luctus non. Morbi maximus facilisis neque, a efficitur massa malesuada ac. Maecenas imperdiet purus purus, vel rutrum mauris fringilla ut. Donec et scelerisque elit. Fusce malesuada est at lacus auctor, et pellentesque nibh cursus. Nunc dui nisl, sagittis a lorem id, iaculis vulputate odio. In magna tellus, tincidunt quis erat vel, auctor fringilla orci. Proin nec vehicula felis.";

function gamepage({game}) {
  return (
    <div className="GamePage" >
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
          <SelectedGame game={game} />
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
              }
              .ContentDiv {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                  grid-gap: 20px;
              }
          `}
      </style>
  </div>
  )
}


function SelectedGame({game}) {

  // TODO: Resize game if decreasing width
  // TODO: Hide sidebars if it's getting cramped
  
  return (
      <div className="SelectedGameContainer">
          <div className="SelectedGameHeader">
              {game}
          </div>
          <div className="SelectedGameBox">

            <iframe 
                src={gameList[game].url} 
                left="0" 
                frameBorder="0" 
                scrolling="no" 
                width="1200" 
                height="660" 
                allowFullScreen
                webkitallowfullscreen
                mozallowfullscreen
                msallowfullscreen
                allow="autoplay; fullscreen; microphone;"
            />

          </div>
          <div className="game-description">
            <h1>Information about {game}: </h1>
            <a>{DescriptionOfGame}</a>
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