import Image from 'next/image';
import gameList from '../GameList.json'

function GameAdvert({game}) {
    return (
        <div className="GameDiv">
            <Image
                className="GameAdvertImage"
                src={`/${gameList[game].image}`}
                alt={`Image of ${game}`}
                width={275}
                height={157}
            />
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