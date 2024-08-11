"use client";
import {useEffect, useState} from "react";
import {getPlayers} from "@/app/helpers/asyncmethods";
import {getTopThree} from "@/app/helpers/methods";
import {PlayerCard} from "@/app/components";
export default function Statistics() {
    const [playersByPoints, setPlayersByPoints] = useState([]);
    const [playersByRebounds, setPlayersByRebounds] = useState([]);
    const [playersByThreePointers, setPlayersByThreePointers] = useState([]);
    const [stats, setStats] = useState(["points", "rebounds", "threepointers"])
    useEffect(() => {
        async function fetchPlayers() {
            for(let i in stats) {
                await getPlayers(stats[i]).then((data) => {
                    switch(stats[i]) {
                        case "points": setPlayersByPoints(data); break;
                        case "rebounds": setPlayersByRebounds(data); break;
                        case "threepointers": setPlayersByThreePointers(data); break;
                        default: break;
                    }
                });
            }
        }
        fetchPlayers();
    }, [stats]);

    return (
        <div className="py-4 flex flex-col items-center gap-4">
            <h1 className="text-[2rem] font-black uppercase text-[#232323]">Top 3</h1>
            <div className="flex gap-8">
                <div className="flex gap-4 flex-col bg-[#ececec] py-4 px-6 rounded-xl">
                    <div className="flex items-center justify-center">
                        <h1 className="text-lg font-black uppercase text-[#232323]">Points</h1>
                    </div>
                    {getTopThree(playersByPoints)?.map((player, index) => (
                        <PlayerCard key={index} player={player}/>
                    ))}
                    <div
                        className="flex py-2 px-4 bg-[#fcb724] rounded-xl items-center justify-center text-white hover:shadow-2xl cursor-pointer">
                        <p>Show All</p>
                    </div>
                </div>
                <div className="flex gap-4 flex-col bg-[#ececec] py-4 px-6 rounded-xl">
                    <div className="flex items-center justify-center">
                        <h1 className="text-lg font-black uppercase text-[#232323]">Rebounds</h1>
                    </div>
                    {getTopThree(playersByRebounds)?.map((player, index) => (
                        <PlayerCard key={index} player={player}/>
                    ))}
                    <div
                        className="flex py-2 px-4 bg-[#fcb724] rounded-xl items-center justify-center text-white hover:shadow-2xl cursor-pointer">
                        <p>Show All</p>
                    </div>
                </div>
                <div className="flex gap-4 flex-col bg-[#ececec] py-4 px-6 rounded-xl">
                    <div className="flex items-center justify-center">
                        <h1 className="text-lg font-black uppercase text-[#232323]">Three Pointers</h1>
                    </div>
                    {getTopThree(playersByThreePointers)?.map((player, index) => (
                        <PlayerCard key={index} player={player}/>
                    ))}
                    <div
                        className="flex py-2 px-4 bg-[#fcb724] rounded-xl items-center justify-center text-white hover:shadow-2xl cursor-pointer">
                        <p>Show All</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
