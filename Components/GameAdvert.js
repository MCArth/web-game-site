import Image from 'next/image';
import gameList from '../GameList.json'
import React, { useState } from 'react';
import Link from 'next/link'

function GameAdvert({game, adState:[onEnter, selectedGame], adId}) {

    const advertWidth = 275;
    const advertHeight = 157;
    var mouseIn = false;

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

    console.log(adId);

    return (
    <Link href={`/${encodeURIComponent(game)}`} >
        <div className="GameDiv"
            onMouseOverCapture={() => {
                if(!mouseIn){
                    onEnter(adId);
                    try {
                        document.getElementById('hoverPreview').style.transform = 'scale(1.5,1.45)';
                    } catch(e) {console.log(e)}
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
            {adId!==selectedGame &&
                <Image
                    className="GameAdvertImage"
                    src={`/${gameList[game].image}`}
                    alt={`Image of ${game}`}
                    width={advertWidth}
                    height={advertHeight}
                />
            }
            {(adId===selectedGame && gameList[game].video != 'no video') &&
                <video 
                    className="GameAdvertPreview"
                    src={`/${gameList[game].video}`}
                    autoPlay
                    id='hoverPreview'
                    muted
                    loop
                    preload='none'
                    width={advertWidth}
                    height={advertHeight}
                />
            }
            {(adId===selectedGame && gameList[game].video == 'no video') &&
                <img
                    className="GameAdvertPreview"
                    src={`/${gameList[game].image}`}
                    alt={`Image of ${game}`}
                    id='hoverPreview'
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
                        position:relative;
                    }
                    .GameAdvertPreview {
                        width: 275;
                        height: 157;
                        border-radius: 10px;
                        z-index: 1;
                        position:relative;
                        transition: all 0.25s;
                        border: solid;
                        border-color: #21C59D;
                        background-color: #000000;
                    }
                    .GameDiv {
                        width: 275;
                        height: 157;
                        margin: 5px;
                        position:relative;
                        border: solid;
                        border-color: #FFFFFF;
                        border-radius: 10px;
                        border-width: 2px;
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    </Link>
    )
}

export default GameAdvert