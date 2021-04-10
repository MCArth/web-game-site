import Image from 'next/image';
import gameList from '../GameList.json'
import React, { useState } from 'react';
import Link from 'next/link'

function GameAdvert({game}) {

    const [videoPlaying, setVideoPlaying] = useState(false);

    const advertWidth = 275;
    const advertHeight = 157;
    var mouseIn = false;

    function expandVideo(){
        setVideoPlaying(true);
        try {
            if(videoPlaying){
                document.getElementById('test').style.transform = 'scale(1.5,1.45)';
            }
        } catch(e) {
            console.log(e);
        }
    }

    function collapseVideo(){
        setVideoPlaying(false);
    }

    return (
    <Link href={`/${encodeURIComponent(game)}`} >
        <div className="GameDiv"
            onMouseOverCapture={() => {
                if(!mouseIn){
                    expandVideo();
                mouseIn = true;
            }
            }}
            onMouseLeave={() => {
                if(mouseIn){
                    collapseVideo();
                mouseIn = false;
                }
            }}
        > 
            {!videoPlaying &&
                <Image
                    className="GameAdvertImage"
                    src={`/${gameList[game].image}`}
                    alt={`Image of ${game}`}
                    width={advertWidth}
                    height={advertHeight}
                />
            }
            {videoPlaying &&
                <video 
                    className="GameAdvertVideo"
                    id='test'
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
                            transition: all 0.25s;
                            transform: scale(1.2,1.1);
                            z-index: 1000;
                            position:relative;
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