import { useContext, useCallback, useState } from "react"
import { debounce } from 'lodash'

// Components
import Table from "components/Table"

// Contexts
import { PlayerContext } from "contexts/players"

// Styles
import { Section, Input, Container } from "./styled"
import { Player } from "types/index"

/**
 * Filters out the players by nationality, club and name
 * 
 * @param players List of players
 * @param query   Query to filter by
 */
function findMatchingPlayers(players: Player[], query: string): Player[] {
    if (!players.length) {
        return []
    }
    return players.filter(player => (
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
                <Input onHandleChange={debouncedChangeHandler} />
                <Table players={matchingPlayers} />
            </Container>
        </Section>
    )
}


export default HomePage