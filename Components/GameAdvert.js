import Image from 'next/image';
import gameList from '../GameList.json'
import React, { useState } from 'react';
import Link from 'next/link'

function GameAdvert({game, adState:[onEnter, selectedGame]}) {

    const advertWidth = 275;
    const advertHeight = 157;
    var mouseIn = false;

    console.log(game===selectedGame);

    /*
    if(game===selectedGame){
        expandVideo();
    }
    */

    /*
    function expandVideo(){
        try {
            if(videoPlaying){
                document.getElementById('test').style.transform = 'scale(1.5,1.45)';
            }
        } catch(e) {
            console.log(e);
        }
    }
    */

    return (
    <Link href={`/${encodeURIComponent(game)}`} >
        <div className="GameDiv"
            onMouseOverCapture={() => {
                if(!mouseIn){
                    onEnter(game);
                    mouseIn = true;
                }
            }}
            onMouseLeave={() => {
                if(mouseIn){
                    onEnter(null);
                    mouseIn = false;
                }
            }}
        > 
            {game!==selectedGame &&
                <Image
                    className="GameAdvertImage"
                    src={`/${gameList[game].image}`}
                    alt={`Image of ${game}`}
                    width={advertWidth}
                    height={advertHeight}
                />
            }
            {game===selectedGame &&
                <video 
                    className="GameAdvertVideo"
                    src={`/${gameList[game].video}`}
                    autoPlay
                    muted
                    loop
                    preload='none'
                    width={advertWidth}
                    height={advertHeight}
                />
            }
            <style jsx global>
                {`
                    .GameAdvertImage {
                        width: 275;
                        height: 157;
                        border-radius: 10px;
                    }
                    .GameAdvertVideo {
                            width: 275;
                            height: 157;
                            border-radius: 1px;
                            z-index: 1000;
                            position:relative;
                            ${game!==selectedGame && 'transform: scale(1.2,1.1);'}
                            ${game===selectedGame && 'transform: scale(1.5,1.45);'}
                            transition: all 0.25s;
                    }
                    .GameDiv {
                        margin: 5px;
                    }
                `}
            </style>
        </div>
    </Link>
    )
}

export default GameAdvert