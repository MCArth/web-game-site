import gameList from '../../GameList.json';
import searchResults from '../../Components/searchResults';
import GenericPage from '../../Components/GenericPage';

export default function Search({game}) {
    return (
        <GenericPage 
          title="Mine and Craft Games.com"
          headerIsClickable={true}
        >
            <searchResults 
                game={game}
            />
        </GenericPage>
      )
}

/*export async function getStaticProps({params}) {
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
}*/
