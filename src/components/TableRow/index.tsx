import React, { FC } from 'react'

import { Wrapper } from './styled'

interface Props {
    player: any
}

const TableRow: FC<Props> = ({ player }) => {
    const { name, nationality, age, club, photo, score, value } = player
    return (
        <Wrapper>
            <div>{name}</div>
            <div>{nationality}</div>
            <div>{age}</div>
            <div>{club}</div>
            <div>{photo}</div>
            <div>{score}</div>
            <div>{value}</div>
        </Wrapper>
    )
}


export default TableRow