"use client";
import { useEffect, useState } from "react";
import { getPlayers } from "@/app/helpers/asyncmethods";
import { getTopThree } from "@/app/helpers/methods";
import { PlayerCard } from "@/app/components";

const STATS = ["points", "rebounds", "threepointers"];

export default function Statistics() {
    const [players, setPlayers] = useState({
        points: [],
        rebounds: [],
        threepointers: []
    });

    const [displayStates, setDisplayStates] = useState({
        points: true,
        rebounds: true,
        threepointers: true
    });

    useEffect(() => {
        async function fetchPlayers() {
            const fetchedPlayers = {};
            for (const stat of STATS) {
                fetchedPlayers[stat] = await getPlayers(stat);
            }
            setPlayers(fetchedPlayers);
        }
        fetchPlayers();
    }, []);

    const toggleDisplay = (stat) => {
        setDisplayStates(prev => ({
            ...prev,
            [stat]: !prev[stat]
        }));
    };

    const getDisplayPlayers = (stat) => {
        return displayStates[stat] ? getTopThree(players[stat]) : players[stat];
    };

    return (
        <div className="py-4 flex flex-col items-center gap-10 mt-10">
            <h1 className="text-[2rem] font-black uppercase text-[#232323]">Statistics</h1>
            <div className="flex gap-8">
                {STATS.map(stat => (
                    <StatCard
                        key={stat}
                        title={stat}
                        players={getDisplayPlayers(stat)}
                        showAll={!displayStates[stat]}
                        onToggle={() => toggleDisplay(stat)}
                    />
                ))}
            </div>
        </div>
    );
}

function StatCard({ title, players, showAll, onToggle }) {
    return (
        <div className="flex gap-4 flex-col bg-[#f2f2f2] py-4 px-6 rounded-xl items-center h-fit">
            <h1 className="text-lg font-black uppercase text-[#232323]">{title}</h1>
            {players?.map((player, index) => (
                <PlayerCard key={index} player={player} />
            ))}
            <button
                className="flex py-2 px-8 bg-[#fcb724] rounded-full items-center justify-center text-white transition duration-300 hover:shadow-md cursor-pointer"
                onClick={onToggle}
            >
                <p className="text-sm">{showAll ? "Show Less" : "Show All"}</p>
            </button>
        </div>
    );
}