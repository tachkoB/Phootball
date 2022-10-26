// import { PlayerState } from "contexts/players";

// // Types
// import { Player } from "types/index";

// /**
//  * Returns the player with the highest value 
//  * 
//  * @param arr List of players
//  */
// const getPlayer = (arr: Player[]): Player => {
//     const values = arr.map(pl => pl.value)
//     const max = Math.max(...values)
//     const player = arr.find(pl => pl.value === max)

//     return player as Player
// }

// self.onmessage = ({ data }: { data: { players: PlayerState, budget: number } }) => {
//     const { budget, players } = data;
//     console.log(players.GK, 'gkeeper')
//     let maxTeam = [
//         players.GK[0],
//         ...players.DF.splice(0, 2),
//         ...players.MF.splice(0, 3),
//         ...players.AT.splice(0, 5)
//     ]

//     let sum = maxTeam.reduce((a, b) => {
//         return a + b.value
//     }, 0)

//     const indices = {
//         GK: 1,
//         DF: 3,
//         MF: 4,
//         AT: 6
//     }

//     // gk = 10
//     // df = 20
//     // mf = 50
//     // at = 100

//     const max = Math.max(players.AT.length, players.DF.length, players.MF.length, players.GK.length)
//     console.log(maxTeam, 'best team')
//     for (let j = 0; j < max; j++) {
//         let changed = false;
//         console.log('hello')
//         if (budget >= sum) break

//         for (let i = 0; i < 11; i++) {
//             if (i === 0) {
//                 if (players.GK[indices.GK]) {
//                     sum += Number(players.GK[indices.GK].value - maxTeam[i].value);
//                     maxTeam[i] = players.GK[indices.GK];
//                     indices.GK += 1;
//                     changed = true;
//                 }
//             }
//             if (i == 1 || i == 2) {
//                 if (players.DF[indices.DF]) {
//                     const defenders = maxTeam.slice(1, 3)
//                     const player = getPlayer(defenders)
//                     sum += Number(players.DF[indices.DF].value - player.value)
//                     maxTeam = maxTeam.map(pl => pl.ID === player!.ID ? players.DF[indices.DF] : pl)
//                     indices.DF += 1;
//                     changed = true;
//                 }
//             }

//             if (i === 3 || i === 4 || i === 5) {
//                 if (players.MF[indices.MF]) {
//                     const midfielders = maxTeam.slice(3, 6)
//                     const player = getPlayer(midfielders)
//                     sum += Number(players.MF[indices.MF].value - player.value)
//                     maxTeam = maxTeam.map(pl => pl.ID === player!.ID ? players.MF[indices.MF] : pl)
//                     indices.MF += 1;
//                     changed = true;
//                 }
//             }

//             // integer optimization
//             if (i > 5) {
//                 if (players.AT[indices.AT]) {
//                     const attackers = maxTeam.slice(6, 11)
//                     const player = getPlayer(attackers)
//                     sum += Number(players.AT[indices.AT].value - player.value)
//                     maxTeam = maxTeam.map(pl => pl.ID === player!.ID ? players.AT[indices.AT] : pl)
//                     indices.AT += 1;
//                     changed = true;
//                 }
//             }

//             if (budget >= sum) break
//         }

//         if (changed === false) break
//     }


//     self.postMessage({
//         team: maxTeam,
//         success: budget >= sum,
//         sum
//     });
// };

// export { }


import { PlayerState } from "contexts/players";

// Types
import { Player } from "types/index";

self.onmessage = ({ data }: { data: { players: PlayerState, budget: number } }) => {
    const { budget, players } = data;

    let maxTeam = [
        players.GK[0],
        ...players.DF.splice(0, 2),
        ...players.MF.splice(0, 3),
        ...players.AT.splice(0, 5)
    ]


    let sum = maxTeam.reduce((a, b) => {
        return a + b.value
    }, 0)

    // Indices of the next best player for the position
    const indices: Record<string, number> = {
        GK: 1,
        DF: 3,
        MF: 4,
        AT: 6
    }


    const positions: Record<number, keyof PlayerState> = {
        0: 'GK',
        1: "DF",
        2: "DF",
        3: "MF",
        4: "MF",
        5: "MF",
        6: "AT",
        7: "AT",
        8: "AT",
        9: "AT",
        10: "AT",
    }

    interface PlayerCount extends Player {
        maxed?: boolean
    }
    function findTeamForBudget(currentTeam: PlayerCount[], sum: number, budget: number): [Player[], number] {
        // If we are within the budget, return
        if (budget >= sum) {
            return [currentTeam, sum]
        }
        // If we used up all the players available, return
        if (currentTeam.every((position) => position.maxed)) {
            return [currentTeam, sum]
        }

        // Prices of all players, ignoring the ones that have no more next best players available
        const prices = currentTeam.map(player => player.maxed ? -1 : player.value)
        // Find the highest price
        const max = Math.max(...prices)
        // Index of the most expensive player
        const index = prices.indexOf(max)
        // The most expensive player
        const mostExpensivePlayer: Player = currentTeam[index]
        // Next best player for that position
        const nextBestPlayer = players[positions[index]][indices[positions[index]]] || null
        // If no more best players, mark the position as maxed out
        if (!nextBestPlayer) {
            currentTeam.map((player, i) => i === index ? { ...player, maxed: true } : player)
            return findTeamForBudget(currentTeam, sum, budget)
        }
        // If the next best player does not improve our total value, leave them out
        if (mostExpensivePlayer.value < nextBestPlayer.value) {
            // Increment to the next best player for the position
            indices[positions[index]] += 1;
            return findTeamForBudget(currentTeam, sum, budget)
        }

        // Adjust the total sum of our team
        sum += Number(nextBestPlayer.value - currentTeam[index].value)
        // Replace the most expensive player with the next best player
        currentTeam = currentTeam.map((pl, i) => i === index ? nextBestPlayer : pl)
        // Increment the indices so that we know who the next best player for the position is
        indices[positions[index]] += 1;

        return findTeamForBudget(currentTeam, sum, budget)
    }

    const [team, total] = findTeamForBudget(maxTeam, sum, budget)

    self.postMessage({
        team: team,
        success: budget >= total,
    });
};

export { }