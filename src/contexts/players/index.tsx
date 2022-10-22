import { createContext, useState, PropsWithChildren, FC, Dispatch, SetStateAction } from "react";

// Types
import { Player } from "types/index";

interface ContextState {
    players: Player[]
    setPlayers: Dispatch<SetStateAction<Player[]>>
}

export const PlayerContext = createContext({} as ContextState)


const PlayerContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [players, setPlayers] = useState<Player[]>([])

    return (

        <PlayerContext.Provider value={{ players, setPlayers }}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider