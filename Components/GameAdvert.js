import Image from 'next/image';
import gameList from '../GameList.json'
import React, { useState } from 'react';

function GameAdvert({game}) {

    const [videoPlaying, setVideoPlaying] = useState(false);

    const advertWidth = 275;
    const advertHeight = 157;

    return (
        <div className="GameDiv"
            onMouseOverCapture={() => {
                setVideoPlaying(true);
                try {
                    if(videoPlaying){
                        document.getElementById('test').style.transform = 'scale(1.5,1.5)';
                    }
                } catch(e) {
                    console.log(e);
                } 
            }}
            onMouseLeave={() => {
                setVideoPlaying(false);
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
    )
}

export default GameAdvert