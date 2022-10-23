import { FC } from 'react'

// Styles
import { Img, Container } from './styled'

// Types
import { Player } from 'types/index'

// Utils
import { nFormatter } from 'utils/formatters'

// Initial state
import { initialState } from 'components/FootballField'

interface Props {
    isLoading: boolean
    player: Player
    handleSetActivePlayer: (player: Player) => void
}


const PlayerIcon: FC<Props> = ({ isLoading, player, handleSetActivePlayer }) => {
    return (
        <>
            <Container
                data-tip
                isLoading={isLoading}
                onMouseOver={() => handleSetActivePlayer(player)}
                onMouseOut={() => handleSetActivePlayer(initialState)}>
                <Img photo={player.photo} />
                <p>{player.name}</p>
                <p>€{nFormatter(player.value)}</p>
                <p>{player.overall}</p>
            </Container>
        </>
    )
}


export default PlayerIcon