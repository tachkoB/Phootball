import { FormEvent, useContext, useState } from "react"
import { flushSync } from "react-dom";

// Components
import FootballField from "components/FootballField"

// Context
import { PlayerContext } from "contexts/players";

// Styles
import { Container, Input } from "../styled"
import { Section, SubmitButton, Error } from './styled'

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

export default function TeamBuilder() {
    const [budget, setBudget] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setError] = useState('')
    const { players } = useContext(PlayerContext)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        flushSync(() => {
            setError(handleError(budget))
        })

        if (isError) {
            return
        }

        setIsLoading(true)

        worker.postMessage({ players, budget: Number(budget) })

        worker.onmessage = ({ data: { answer } }) => {
            // setIsLoading(false)
            console.log(answer);
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

                <FootballField isLoading={isLoading} />
            </Container>
        </Section>
    )
}
