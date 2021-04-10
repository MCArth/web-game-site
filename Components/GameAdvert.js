import Image from 'next/image';
import gameList from '../GameList.json'
import React, { useState } from 'react';
import Link from 'next/link'

function GameAdvert({game}) {

    const [videoPlaying, setVideoPlaying] = useState(false);

    const advertWidth = 275;
    const advertHeight = 157;

    return (
        <Link href={`/${encodeURIComponent(game)}`} >
            <div className="GameDiv"
                onMouseEnter={() => setVideoPlaying(true)}
                onMouseLeave={() => setVideoPlaying(false)}
            >
                {!videoPlaying &&
                    <Image
                        className="GameAdvertImage"
                        src={`/${gameList[game].image}`}
                        alt={`Image of `}
                        width={advertWidth}
                        height={advertHeight}
                    />
                }
                {videoPlaying &&
                    <video
                        className="GameAdvertVideo"
                        src={`/${gameList[game].video}`}
                        autoPlay
                        loop='true'
                        playsInline='true'
                        preload='auto'
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
                            border-radius: 10px;
                        }
                        .GameDiv {
                            margin: 5px;
                            cursor: pointer;
                        }
                    `}
                </style>
            </div>
        </Link>
    )
}

export default GameAdvert