"use client";
import { useEffect, useState } from "react";
import { getPlayers } from "@/app/helpers/asyncmethods";
import { getTopThree } from "@/app/helpers/methods";
import { Modal, PlayerCard } from "@/app/components";

const STATS = ["points", "rebounds", "threepointers"];

export default function Statistics() {
    const [players, setPlayers] = useState({
        points: [],
        rebounds: [],
        threepointers: []
    });

    const [showModal, setShowModal] = useState(false);
    const [neededPlayers, setNeededPlayers] = useState([]);
    const [currentStat, setCurrentStat] = useState("");
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
        setNeededPlayers(players[stat]);
        setCurrentStat(stat);
        toggleModal();
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const getDisplayPlayers = (stat) => {
        return getTopThree(players[stat]);
    };

    return (
        <div className="py-8 flex flex-col items-center gap-10 statistics-container">
            {showModal && <Modal players={neededPlayers} closeAction={toggleModal} stat={currentStat} />}
            <h1 className="text-[2rem] font-black uppercase text-white">Statistics</h1>
            <div className="flex gap-8 cards-container">
                {STATS.map(stat => (
                    <StatCard
                        key={stat}
                        title={stat}
                        players={getDisplayPlayers(stat)}
                        onToggle={() => toggleDisplay(stat)}
                    />
                ))}
            </div>
        </div>
    );
}

function StatCard({ title, players, onToggle }) {
    return (
        <div className="flex gap-4 flex-col border-[#f2f2f2] border-[1px] py-4 px-6 rounded-xl items-center h-fit stat-card">
            <h1 className="text-lg font-black uppercase text-white">{title}</h1>
            {players?.map((player, index) => (
                <PlayerCard key={index} player={player} />
            ))}
            <button
                className="flex py-2 px-8 bg-[#fcb724] rounded-full items-center justify-center text-white transition duration-300 hover:shadow-md cursor-pointer"
                onClick={onToggle}
            >
                <p className="text-sm">Show All</p>
            </button>
        </div>
    );
}