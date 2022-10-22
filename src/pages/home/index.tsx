import { useContext, useCallback, useState } from "react"
import { debounce } from 'lodash'

// Components
import Table from "components/Table"

// Contexts
import { PlayerContext, PlayerState } from "contexts/players"

// Styles
import { Section, Container, Input } from "../styled"

// Types
import { Player } from "types/index"

/**
 * Filters out the players by nationality, club and name
 * 
 * @param players List of players
 * @param query   Query to filter by
 */
function findMatchingPlayers(players: PlayerState, query: string): Player[] {
    const keys = Object.keys(players) as Array<keyof PlayerState>

    const flattenedMap = keys.reduce((a, b) => {
        return [...a, ...players[b]]
    }, [] as Player[])


    return flattenedMap.filter(player => (
        player.name.toLowerCase().includes(query.toLowerCase())
        || player.club.toLowerCase().includes(query.toLowerCase())
        || player.nationality.toLowerCase().includes(query.toLowerCase())
    ))
}


/**
 *  Renders the homepage with the filter players functionality 
 */
const HomePage = () => {
    const { players } = useContext(PlayerContext)
    const [query, setQuery] = useState('')

    let matchingPlayers: Player[] = []

    if (query.length > 1) {
        matchingPlayers = findMatchingPlayers(players, query)
    }

    const handleChange = (text: string) => {
        setQuery(text)
    }

    const debouncedChangeHandler = useCallback(
        debounce(handleChange, 300)
        , []);

    return (
        <Section>
            <h1>Find your teammate</h1>
            <Container>
                <Input onHandleChange={debouncedChangeHandler} placeholder={'Search by name, club or nationality..'} />
                <Table players={matchingPlayers} />
            </Container>
        </Section>
    )
}


export default HomePage