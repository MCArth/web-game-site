import gameList from '../GameList.json'
import GamePage from '../Components/GamePage'

export default function Game({game}) {
    return <GamePage 
        game={game}
    />
}

export async function getStaticProps({params}) {
    // given the name of the path, return props that will be passed to the Game component when it is statically generated
    return {
        props: {
            game: params.game
        }
    }
}

export async function getStaticPaths() {
    // Return a list of paths that would match this component
    return {paths: Object.keys(gameList).map(game => `/${game}`), fallback: false}
}
