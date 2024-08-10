"use server";

import {promises as fs} from 'fs';

async function getPlayers(type) {
    const file = await fs.readFile(process.cwd() + `/src/app/misc/${type}.json`, 'utf8');
    const data = JSON.parse(file);
    let players = [];
    switch(type) {
        case "points": players = data?.pts?.pl; break;
        case "rebounds": players = data?.reb?.pl; break;
        case "threepointers": players = data?.tpp?.pl; break;
        default: break;
    }
    return players;
}

function getTopThree(players) {
    return players.sort((a, b) => b.val - a.val).slice(0, 3);
}

export {getPlayers, getTopThree};