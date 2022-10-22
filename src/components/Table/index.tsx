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
const Table: FC<Props> = ({ players }) => {

    return (
        <Container>
            <TableHead />
            {players.map(player => <TableRow player={player} key={player.ID} />)}
        </Container>
    )
}

export default Table