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
                <div className="flex gap-4 flex-col">
                    <h1 className="text-lg font-black uppercase text-[#232323]">Points</h1>
                    {getTopThree(playersByPoints)?.map((player, index) => (
                        <PlayerCard key={index} player={player}/>
                    ))}
                </div>
                <div className="flex gap-4 flex-col">
                    <h1 className="text-lg font-black uppercase text-[#232323]">Rebounds</h1>
                    {getTopThree(playersByRebounds)?.map((player, index) => (
                        <PlayerCard key={index} player={player}/>
                    ))}
                </div>
                <div className="flex gap-4 flex-col">
                    <h1 className="text-lg font-black uppercase text-[#232323]">Three pointers</h1>
                    {getTopThree(playersByThreePointers)?.map((player, index) => (
                        <PlayerCard key={index} player={player}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
