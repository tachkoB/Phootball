import { FC, useState } from "react"

// Components 
import PlayerIcon from 'components/Player'
import PlayerTooltip from 'components/Tooltip'

// Styles
import { Container, Wrapper, Field } from './styled'

// Images
import Pitch from 'images/soccer-field.jpg'

// Types
import { Player } from "types/index"

interface Props {
    isLoading: boolean
    team: Player[]
}

export const initialState = {
    name: '',
    nationality: '',
    club: '',
    ID: 0,
    age: 0,
    overall: 0,
    position: '',
    value: 0,
    photo: ''
}

/**
 * Renders the football field with players
 * 
 * @param isLoading  Loading state 
 * @param team       Team to render 
 */
const FootballField: FC<Props> = ({ isLoading, team }) => {
    const [activePlayer, setActivePlayer] = useState<Player>(initialState)

    /**
     * Handles setting the active player for the tooltip
     * 
     * @param player Player to render
     */
    const handleSetActivePlayer = (player: Player) => {
        setActivePlayer(player)
    }
    return (
        <>
            <PlayerTooltip player={activePlayer} />
            <Container>
                <Wrapper>
                    <img src={Pitch} />
                    <Field>
                        {team.map(player => (
                            <PlayerIcon handleSetActivePlayer={handleSetActivePlayer} player={player} isLoading={isLoading} key={player.ID} />
                        ))}
                    </Field>
                </Wrapper>
            </Container>
        </>
    )
}

export default FootballField