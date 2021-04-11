import Head from 'next/head'
import Link from 'next/link';
import React, {useState} from 'react';

export default function GenericPage({title, children, headerIsClickable}) {

  const [searchData, setSearchData] = useState(null);
  const [search, setSearch] = useState(false);

  function getSearchData(val){
      setSearchData(val.target.value)
  }

    return (
        <div className="root">
          <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
            {/* <LandingPage /> */}
            {headerIsClickable ? (
                <Link href="/">
                    <div className="HeaderDiv Title">
                        <div className="Header">
                            Mine and Craft Games.com
                        </div>
                    </div>
                </Link>
            ) : (
                <div className="HeaderDiv Title">
                    <div className="Header">
                        Mine and Craft Games.com
                    </div>
                </div>
            )}
            <div className="SearchBar">
              <input className="inputSearch" placeholder={"Search for a game.."} type="text" onChange={getSearchData}/>
              <Link href={`/search?query=${encodeURIComponent(searchData)}`}> 
                <button className="searchButton" type="submit" onClick={()=>setSearch(true)} >Search</button>
              </Link>
            </div>
            {children}
          </main>
          <style jsx global>
            {`
              .root {
                background-color: #333333;
              }
              .Title {
                  font-family: pixel-font;
              }
              div {
                  color: white;
                  text-align: center;
              }
              .HeaderDiv {
                width: 100%;
                font-size: 50px;
                text-align: center;
                padding-bottom: 20px;
                padding-top: 20px;
                margin-bottom: 40px;
                background-color: #1B1B1B;
                ${headerIsClickable ? "cursor: pointer;" : ""}
              }

              .SearchBar {
                padding-bottom: 20px;
              }
              .SearchBar .inputSearch{
                margin: 0 10px 0 0;
                box-shadow: 0 0 20px 0 var(--primaryShaded1);
                width: 25%;
                border: none;
                outline: none;
                height: 60px;
                font-size: 20px;
                border-radius: 14px;
                padding: 8px;
              }
              .SearchBar .inputSearch:hover{
                box-shadow: 0 0 20px 0 black;
              }
              .SearchBar .searchButton {
                box-shadow: 0 0 12px 0 var(--primaryShaded1);
                background: var(--primaryShaded1);
                height: 60px;
                font-size: 20px;
                padding: 10px 20px;
                border: none;
                outline: none;
                border-radius: 14px;
                color: white;
              }
              .SearchBar .searchButton:hover {
                box-shadow: 0 0 12px 0 black;
                cursor: pointer;
              }

              {/* h1 {
                    --shadowColour: rgb(0, 120, 189);
                    font-family: pixel-font;
                    text-shadow 0.1em 0.1em 0 var(--shadowColour),
                        0.1em -0.1em 0 var(--shadowColour),
                        -0.1em 0.1em 0 var(--shadowColour),
                        -0.1em -0.1em 0 var(--shadowColour),
                        0 0.1em 0 var(--shadowColour),
                        0 -0.1em 0 var(--shadowColour),
                        0.1em 0 var(--shadowColour),
                        -0.1em 0 var(--shadowColour);
                } */}
            `}
          </style>
        </div>
      )
    
}