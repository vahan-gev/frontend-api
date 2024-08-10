"use client";

import {LakersHeader, NBAHeader} from "@/app/components";
import {useEffect, useState} from "react";
import {getPlayers, getTopThree} from "@/app/helpers/parser";
export default function Home() {
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
    useEffect(() => {
        console.log("playersByPoints:", playersByPoints);
        const topThreePoints = getTopThree(playersByPoints);
        console.log("topThreePoints:", topThreePoints);
    }, [playersByPoints]);
  return (
      <div>
          <NBAHeader/>
          <LakersHeader/>
          <h1>{playersByThreePointers[0]?.fn}</h1>
      </div>
  );
}
