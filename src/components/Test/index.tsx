import { FC } from "react"

import { Paragraph } from './styled'

interface Props {
    name: string
}

const Test: FC<Props> = ({ name }) => {
    return (
        <div>
            <p>{name}</p>
            <Paragraph>hi hi</Paragraph>
        </div>
    )
}

export default Test