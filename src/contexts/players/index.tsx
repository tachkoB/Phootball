import { createContext, useState, PropsWithChildren, FC } from "react";

// Types
import { Player } from "types/index";

// Utils
import { mapPlayersPerPosition } from "utils/mappers";

export interface PlayerState {
    GK: Player[]
    DF: Player[]
    MF: Player[]
    AT: Player[]
    rest: Player[]
}


interface ContextState {
    players: PlayerState
    setPlayers: (players: Player[]) => void
}

export const PlayerContext = createContext({} as ContextState)

export const initialState = {
    GK: [],
    DF: [],
    MF: [],
    AT: [],
    rest: []
}

const PlayerContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [players, setPlayers] = useState<PlayerState>(initialState)

    const handleStorePlayers = (players: Player[]) => {
        setPlayers(mapPlayersPerPosition(players))
    }

    return (

        <PlayerContext.Provider value={{ players, setPlayers: handleStorePlayers }}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider