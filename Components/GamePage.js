import GameAdvert from '../Components/GameAdvert';
import Link from 'next/link'
import gameList from '../GameList.json'
import React, { useState } from 'react';
import Image from 'next/Image';
import { useWindowSize, useAdState } from './hooks'


function gamepage({game}) {

	const [numEleGameRow, setNumEleGameRow] = useState(3)


	
	useWindowSize((newSize) => {
		const {width} = newSize
		const gameWidth = 800;
		const sideBar = 320;
		if (width >= gameWidth + sideBar*2) {
			setNumEleGameRow(3)
		}
		else if (width >= gameWidth+sideBar) {
			setNumEleGameRow(2)
		}
		else {
			setNumEleGameRow(1)
		}
	})


	return (
		<div className="GamePage" >
		<div className="ContentDiv" >
			{/* todo make this better based on numEle */}
			{numEleGameRow === 3 ? (<>
				<AdvertisementLeft/>
				<SelectedGame game={game} />
				<MoreGames game={game}/></>) : 
				<SelectedGame game={game} />}
		</div>
		<style jsx global>
			{`
					.ContentDiv {
						display: flex;
						background-color: #333333;
					}
			`}
		</style>
	</div>
	)
}


function SelectedGame({game}) {


	return (
		<div className="SelectedGameContainer">
			<div className="SelectedGameHeader Title">
				{gameList[game].title}
			</div>
			<div className="SelectedGameBox">

				<iframe 
					src={gameList[game].url} 
					left="0" 
					frameBorder="0" 
					scrolling="no" 
					width="800"
					height="660" 
					allowFullScreen
					webkitallowfullscreen
					mozallowfullscreen
					msallowfullscreen
					allow="autoplay; fullscreen; microphone;"
				/>

			</div>
			<div className="game-description">
				<h1>Information about {gameList[game].title}: </h1>
				<p>{gameList[game].desc}</p>
			</div>
			<div className="BathHack">
				<Image src="/bathhack_horizontal.png" alt="me" width="1052" height="240" />
			</div>
			<style jsx>
				{`
					.SelectedGameContainer {
						justify-content: center;
						position: center;
					}
					.SelectedGameBox {
						display: center;
						flex-grow: 1;
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
					.BathHack {
						background-color: var(--primaryShaded1);
						padding: 5px;
						padding-top: 20px;
						margin: 10px;
						border-radius: 10px;
						height: fit-content;
					}
				`}
			</style>
		</div>
	)
}

function MoreGames({game}) {

	var length = 6;
    const games = new Array(length).fill('Default');
    const adState = useAdState();
    
    var i = 0;
    var firstRun = true;
    for (var key of Object.keys(gameList)) {
        if (firstRun || key==game || i>=6) {
            firstRun = false;
            continue;
        }
        games[i] = key;
        i++;
    }

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
            			adState={adState}
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

						background-color: var(--primaryShaded1);
						padding: 5px;
						padding-top: 20px;
						margin: 10px;
						border-radius: 10px;
						height: fit-content;
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

function AdvertisementLeft(){
  
	return (
		<div className="Ad">
			<Image src="/bathhack_vertical.png" alt="me" width="200" height="680" />
			<style jsx>
				{`
					.Ad {
					min-width: 100px;
					position: absolute;
					left: 14px;
					padding-left: 10px;

					background-color: var(--primaryShaded1);
					padding: 5px;
					padding-top: 20px;
					margin: 10px;
					border-radius: 10px;
					height: fit-content;
					}
				`}
			</style>
		</div>
	)
}

export default gamepage;