import { PlayerState } from "contexts/players";
import { Player } from "types/index";
import { isAttack, isDefender, isGoalKeeper, isMidfielder } from "utils/mappers";

self.onmessage = ({ data }: { data: { players: PlayerState, budget: number } }) => {
    const { budget, players } = data;
    // console.log(players.AT.length, players.DF.length, players.MF.length, players.GK.length)
    const length = players.AT.length + players.DF.length + players.MF.length + players.GK.length

    let initialTeam = [
        [players.GK[0]],
        [...players.DF.slice(0, 2)],
        [...players.MF.slice(0, 3)],
        [...players.AT.slice(0, 5)]
    ]

    let nextBestTeam = [
        [players.GK[1]],
        [...players.DF.slice(2, 4)],
        [...players.MF.slice(3, 6)],
        [...players.AT.slice(5, 10)]
    ]



    let sum = 0;

    initialTeam.forEach(ar => {
        const s = ar.reduce((a, b) => {
            return a + b.value
        }, 0)

        sum += s;
    })


    const indices = {
        GK: 1,
        DF: 4,
        MF: 6,
        AT: 10
    }

    let result: Player[] = []

    const getNextPlayer = (index: number, player: Player) => {
        if (isGoalKeeper(player.position)) {
            if (players.GK[indices.GK + 1]) {
                indices.GK += 1;
                return players.GK[indices.GK]
            }
        }
        if (isDefender(player.position)) {
            if (players.DF[indices.DF + 1]) {
                indices.DF += 1;
                return players.DF[indices.DF]
            }
        }

        if (isMidfielder(player.position)) {
            if (players.MF[indices.MF + 1]) {
                indices.MF += 1;
                return players.MF[indices.MF]
            }
        }

        if (isAttack(player.position)) {
            if (players.AT[indices.AT + 1]) {
                indices.AT += 1;
                return players.AT[indices.AT]
            }
        }
    }

    const getIndices = (team: Array<Player[]>, nextTeam: Array<Player[]>) => {
        const memo = {
            arrIndex: null,
            current: null,
            next: null,
            value: null
        }

        nextTeam.forEach((arr, i) => {
            arr.forEach((player, j) => {
                team[i].forEach((current, k) => {
                    const res = (((current.overall || 1) / (current.value || 1)) - ((player.overall || 1) / (player.value || 1)))

                    if (!memo.value || res < memo.value) {
                        memo.value = res
                        memo.arrIndex = i
                        memo.current = k
                        memo.next = j
                    }
                })
            })

        })

        return memo
    }


    // console.log(initialTeam, 'init team')
    // console.log(nextBestTeam, 'next team')


    for (let i = 0; i < length; i++) {
        // console.log(indices)
        // if (sum <= budget) break

        initialTeam = initialTeam.filter(x => x !== undefined)
        nextBestTeam = nextBestTeam.reduce((a, b) => {
            const l = b.filter((s) => s !== undefined)
            a.push(l)
            return a
        }, []).filter(x => x !== undefined)

        if (!nextBestTeam[0].length && !nextBestTeam[1].length && !nextBestTeam[2].length) {
            break
        }


        console.log(initialTeam, 'initial team')
        console.log(nextBestTeam, 'next team')
        const { current, next, arrIndex } = getIndices(initialTeam, nextBestTeam)


        initialTeam[arrIndex!][current!] = nextBestTeam[arrIndex!][next!]

        sum += initialTeam[arrIndex!][current!].value

        console.log(indices)

        nextBestTeam[arrIndex!][next] = getNextPlayer(next, nextBestTeam[arrIndex!][next]);

        // console.log({ current, next, arrIndex })



        // const weights = initialTeam.map((val, i) => (val.overall || 1 / val.value || 1) - (nextBestTeam[i].overall || 1 / nextBestTeam[i].value || 1))
        // const min = Math.min(...weights);
        // const index = weights.indexOf(min);

        //  console.log(sum, 'sum')

        // sum += (nextBestTeam[index].value - initialTeam[index].value);
        // initialTeam[index] = nextBestTeam[index];
        // nextBestTeam[index] = getNextPlayer(index, initialTeam[index]);
    }

    const x = [...result, ...initialTeam]

    const r: Player[] = []

    initialTeam.forEach(arr => {
        r.push(...arr)
    })
    console.log(r, 'the final team')

    self.postMessage({
        team: r,
        success: budget >= sum,

    });

};

export { }