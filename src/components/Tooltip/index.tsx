import { FC } from 'react';
import ReactTooltip from 'react-tooltip'

// Types
import { Player } from 'types/index';

// Styles
import { Container } from './styled';

// Utils
import { nFormatter } from 'utils/formatters';


interface Props {
    player: Player
}

/**
 * Renders a tooltip with the information about the player
 *
 * @param player    Player data to render
 */
const PlayerTooltip: FC<Props> = ({ player }) => {
    const { name, nationality, age, club, overall, position, value } = player;

    if (!name) {
        return null;
    }

    return (
        <ReactTooltip>
            <Container>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Nationality: {nationality}</p>
                <p>Club: {club}</p>
                <p>Overall: {overall}</p>
                <p>Nationality: {nationality}</p>
                <p>Position: {position}</p>
                <p>Value: €{nFormatter(value)}</p>
            </Container>
        </ReactTooltip>
    );
};

export default PlayerTooltip;
