import gameList from '../GameList.json';
import SearchResults from '../Components/searchResults';
import GenericPage from '../Components/GenericPage';
import { useEffect, useState } from 'react';
import queryString from 'query-string'

export default function Search({}) {
    const [searchQuery, setSearchQuery] = useState("")
	useEffect(() => {
		setSearchQuery(queryString.parse(document.location.search).query)
	})
	console.log(searchQuery)
    return (
        <GenericPage 
          title="Mine and Craft Games.com"
          headerIsClickable={true}
        >
            <SearchResults 
                search={searchQuery}
            />
        </GenericPage>
      )
}
