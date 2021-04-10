import Image from 'next/image';
import gameList from '../GameList.json'
import React, { useState } from 'react';

function GameAdvert({game}) {

    const [videoPlaying, setVideoPlaying] = useState(false);

    return (
        <div className="GameDiv"
            onMouseEnter={() => setVideoPlaying(true)}
            onMouseLeave={() => setVideoPlaying(false)}
        > 
            {!videoPlaying &&
                <Image
                    className="GameAdvertImage"
                    src={`/${gameList[game].image}`}
                    alt={`Image of ${game}`}
                    width={275}
                    height={157}
                />
            }
            {videoPlaying && 
                <div>Video Playing</div>
            }
            <style jsx global>
                {`
                    .GameAdvertImage {
                        width: 275;
                        height: 157;
                        border-radius: 10px;
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