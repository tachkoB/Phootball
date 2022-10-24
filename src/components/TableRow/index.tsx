import { FC } from 'react'

// Components
import Avatar from 'components/Avatar'

// Utils
import { nFormatter } from 'utils/formatters'

// Types
import { Player } from 'types/index'

// Styles
import { Wrapper } from './styled'

interface Props {
    player: Player
}

/**
 * Renders the table row with player data
 * 
 * @param player Player data 
 */
const TableRow: FC<Props> = ({ player }) => {
    const { name, nationality, age, club, photo, overall, value, position } = player
    return (
        <Wrapper>
            <div>
                <Avatar photo={photo} />
                <span>
                    {name}
                </span>
            </div>
            <div>
                <span>{age}</span>
            </div>
            <div>
                <span>{nationality}</span>
            </div>
            <div>
                <span>{club}</span>
            </div>
            <div>
                <span>{overall}</span>
            </div>
            <div>
                <span>€{nFormatter(value)}</span>
            </div>
        </Wrapper>
    )
}


export default TableRow