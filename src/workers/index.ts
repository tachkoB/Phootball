import { PlayerState } from "contexts/players";

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

    for (let i = 0; i < max; i++) {
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
                    sum += Number(players.DF[indices.DF].value - maxTeam[i].value)
                    maxTeam[i] = players.DF[indices.DF];
                    indices.DF += 1;
                    changed = true;
                }
            }

            else if (i == 3 || i == 4 || i == 5) {
                if (players.MF[indices.MF]) {
                    sum += Number(players.MF[indices.MF].value - maxTeam[i].value)
                    maxTeam[i] = players.MF[indices.MF];
                    indices.MF += 1;
                    changed = true;
                }
            }

            else if (i > 5) {
                if (players.AT[indices.AT]) {
                    sum += Number(players.AT[indices.AT].value - maxTeam[i].value)
                    maxTeam[i] = players.AT[indices.AT];
                    indices.AT += 1;
                    changed = true;
                }
            }

            if (budget >= sum) break
        }

        if (budget >= sum || changed === false) break
    }


    self.postMessage({
        team: maxTeam,
        success: budget >= sum,
        sum
    });
};

export { }