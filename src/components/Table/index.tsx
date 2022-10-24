import { FC } from 'react'

// Components
import TableRow from 'components/TableRow'
import TableHead from 'components/TableHead'

// Styles
import { Container } from './styled'

// Types
import { Player } from 'types/index'


interface Props {
    players: Player[]
}

/**
 * Renders the table with players
 * 
 * @param players   Players to render 
 */
const Table: FC<Props> = ({ players }) => {
    return (
        <Container>
            <TableHead />
            {players.map(player => <TableRow player={player} key={player.ID} />)}
        </Container>
    )
}

export default Table