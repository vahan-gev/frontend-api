function getTopThree(players) {
    return players.sort((a, b) => b.val - a.val).slice(0, 3);
}

export { getTopThree };