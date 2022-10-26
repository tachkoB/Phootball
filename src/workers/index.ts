import { PlayerState } from "contexts/players";

// Types
import { Player } from "types/index";

interface PlayerWithCount extends Player {
    maxed?: boolean
}

self.onmessage = ({ data }: { data: { players: PlayerState, budget: number } }) => {
    const { budget, players } = data;

    // Best possible team
    const maxTeam = [
        players.GK[0],
        ...players.DF.splice(0, 2),
        ...players.MF.splice(0, 3),
        ...players.AT.splice(0, 5)
    ]

    // Initial sum
    const sum = maxTeam.reduce((a, b) => {
        return a + b.value
    }, 0)

    // Indices of the next best player for the position
    const indices: Record<string, number> = {
        GK: 1,
        DF: 3,
        MF: 4,
        AT: 6
    }

    // Map of player positions
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



    function findTeamForBudget(currentTeam: PlayerWithCount[], sum: number, budget: number): [Player[], number] {
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
        const mostExpensivePlayer = currentTeam[index]
        // Next best player for that position
        const nextBestPlayer = players[positions[index]][indices[positions[index]]] || null
        // If no more best players for that position, mark the position as maxed out
        if (!nextBestPlayer) {
            currentTeam.map((player, i) => i === index ? { ...player, maxed: true } : player)
            return findTeamForBudget(currentTeam, sum, budget)
        }
        // If the next best player does not improve our total value, don't include them
        if (mostExpensivePlayer.value < nextBestPlayer.value) {
            // Increment to the next best player for the position
            indices[positions[index]] += 1;
            return findTeamForBudget(currentTeam, sum, budget)
        }

        // Adjust the total sum of our team
        sum += Number(nextBestPlayer.value - mostExpensivePlayer.value)
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