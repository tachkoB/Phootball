import { PlayerState } from "contexts/players";

// Types
import { Player } from "types/index";

const getPlayer = (arr: Player[]): Player => {
    const values = arr.map(pl => pl.value)
    const min = Math.max(...values)
    const player = arr.find(pl => pl.value === min)

    return player as Player
}

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

    const indices = {
        GK: 1,
        DF: 3,
        MF: 4,
        AT: 6
    }


    const max = Math.max(players.AT.length, players.DF.length, players.MF.length, players.GK.length)

    for (let j = 0; j < max; j++) {
        let changed = false;
        for (let i = 0; i < 11; i++) {
            if (i === 0) {
                if (players.GK[indices.GK]) {
                    sum += Number(players.GK[indices.GK].value - maxTeam[i].value);
                    maxTeam[i] = players.GK[indices.GK];
                    indices.GK += 1;
                    changed = true;
                }
            }
            else if (i == 1 || i == 2) {
                if (players.DF[indices.DF]) {
                    const defenders = maxTeam.slice(1, 3)
                    const player = getPlayer(defenders)
                    sum += Number(players.DF[indices.DF].value - player.value)
                    maxTeam = maxTeam.map(pl => pl.ID === player!.ID ? players.DF[indices.DF] : pl)
                    indices.DF += 1;
                    changed = true;
                }
            }

            else if (i === 3 || i === 4 || i === 5) {
                if (players.MF[indices.MF]) {
                    const midfielders = maxTeam.slice(3, 6)
                    const player = getPlayer(midfielders)
                    sum += Number(players.MF[indices.MF].value - player.value)
                    maxTeam = maxTeam.map(pl => pl.ID === player!.ID ? players.MF[indices.MF] : pl)
                    indices.MF += 1;
                    changed = true;
                }
            }

            else if (i > 5) {
                if (players.AT[indices.AT]) {
                    const attackers = maxTeam.slice(6, 11)
                    const player = getPlayer(attackers)
                    sum += Number(players.AT[indices.AT].value - player.value)
                    maxTeam = maxTeam.map(pl => pl.ID === player!.ID ? players.AT[indices.AT] : pl)
                    indices.AT += 1;
                    changed = true;
                }
            }

            if (budget >= sum || changed === false) break
        }

        if (budget >= sum) break
    }


    self.postMessage({
        team: maxTeam,
        success: budget >= sum,
        sum
    });
};

export { }