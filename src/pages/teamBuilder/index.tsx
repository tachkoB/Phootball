import { FormEvent, useContext, useState } from "react"

// Components
import FootballField from "components/FootballField"

// Context
import { PlayerContext } from "contexts/players";

// Styles
import { Container, Input } from "../styled"
import { Section, SubmitButton, Error } from './styled'

// Types
import { Player } from "types/index";

// Web worker
const worker = new Worker(new URL('../../workers/index.ts', import.meta.url));

function handleError(budget: string) {
    if (isNaN(Number(budget))) {
        return 'Budget must be a number'
    }

    if (Number(budget) < 1) {
        return 'Budget must be bigger than 1'
    }

    return ''
}


/**
 * Renders the page to build football teams
 */
export default function TeamBuilder() {
    const { players } = useContext(PlayerContext)
    const [budget, setBudget] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setError] = useState('')
    const [team, setTeam] = useState<Player[]>([])
    /**
     * Submits the form and starts the web worker
     */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errorMessage = handleError(budget)

        if (errorMessage) {
            setError(errorMessage)
            return
        }

        setError('')
        setIsLoading(true)

        worker.postMessage({ players, budget: Number(budget) })

        worker.onmessage = ({ data: { success, team } }) => {
            setIsLoading(false)
            if (success) {
                setTeam(team)
                return
            }
            setError('No team available')
            setTeam([])
        };
    }



    return (
        <Section>
            <h1>Team builder</h1>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Input onHandleChange={setBudget} value={budget} placeholder={'Your budget'} />
                    <SubmitButton text={'Search'} type={'submit'} />
                </form>
                {isError && <Error>{isError}</Error>}

                <FootballField team={team} isLoading={isLoading} />

            </Container>
        </Section>
    )
}
