export default function PlayerCard({player}) {
    return (
        <div className="flex py-2 px-4 bg-[#232323] rounded-xl gap-2 text-white justify-between">
            <div className="w-[120px] max-w-[120px] flex flex-col items-center justify-center">
                <span className="text-sm">{player?.fn + " " + player?.ln}</span>
            </div>
            <div className="inline-block w-[0.5px] self-stretch bg-white"></div>
            <div className="w-[50px] max-w-[50px] flex flex-col items-center justify-center">
                <span className="text-sm">{player?.pos}</span>
            </div>
            <div className="inline-block w-[0.5px] self-stretch bg-white"></div>
            <div className="w-[50px] max-w-[50px] flex items-center justify-center">
                <span className="text-sm">{player?.val.toFixed(1)}</span>
            </div>
        </div>
    )
}