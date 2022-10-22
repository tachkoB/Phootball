import { FC } from "react"

// Components 
import Player from 'components/Player'

// Styles
import { Container, Wrapper, Field } from './styled'

// Images
import Pitch from 'images/soccer-field.jpg'


const FootballField: FC = () => {
    return (
        <Container>
            <Wrapper>
                <img src={Pitch} />
                <Field>
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                </Field>
            </Wrapper>
        </Container>
    )
}

export default FootballField