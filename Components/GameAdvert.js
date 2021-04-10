import Image from 'next/image';

function GameAdvert({}) {
    return (
        <div className="GameDiv">
            <Image
                src="/bloxdhop275x157.png"
                width={275}
                height={157}
            />
            <style jsx>
                {`
                    p {
                        width: 275;
                        height: 157;
                    }
                `}
            </style>
        </div>
    )
}

export default GameAdvert