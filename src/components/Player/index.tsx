import { FC } from 'react'

// Styles
import { Img, Container } from './styled'

interface Props {
    isLoading: boolean
}

const Player: FC<Props> = ({ isLoading }) => {
    return (
        <Container isLoading={isLoading}>
            <Img photo={''} />
        </Container>
    )
}


export default Player