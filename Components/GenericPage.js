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
              <input placeholder={"Search for a game.."} type="text" onChange={getSearchData}/>
              <Link href={`/search/${encodeURIComponent(searchData)}`}> 
                <button type="submit" onClick={()=>setSearch(true)} >Search</button>
              </Link>
            </div>
            {children}
          </main>
          <style jsx global>
            {`
              .root {
                background-color: #333333;
              }
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