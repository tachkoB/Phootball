import { initialState, PlayerState } from "contexts/players"

// Types
import { Player } from "types/index"

const DEFENSE = ['LB','RB','LWB','RWB']
const MIDFIELD = ['CB','LCB','RCB','CDM','LDM','RDM','CM','LCM','RCM','LM','RM']
const ATTACK = ['CAM','LAM','RAM','LWF','RWF','CF','LCF','RCF']

export const isGoalKeeper = (position: string) => position.toUpperCase() === 'GK'

export const isDefender = (position: string) => DEFENSE.some(role=> role === position)

export const isMidfielder = (position: string) => MIDFIELD.some(role=> role === position)

export const isAttack = (position:string) => ATTACK.some(role => role === position)

export function mapPlayersPerPosition(players: Player[]): PlayerState {
    if (!players.length) {
        return initialState
    }

    return players.reduce((current, pl) => {
        if (isGoalKeeper(pl.position)) {
            return {
                ...current,
                GK: [...current.GK, pl]
            }
        }
        if (isDefender(pl.position)) {
            return {
                ...current,
                DF: [...current.DF, pl]
            }
        }

        if (isMidfielder(pl.position)) {
            return {
                ...current,
                MF: [...current.MF, pl]
            }
        }

        if (isAttack(pl.position)) {
            return {
                ...current,
                AT: [...current.AT, pl]
            }
        }

        return {...current, rest: [...current.rest, pl]}


    }, initialState as PlayerState)
}

