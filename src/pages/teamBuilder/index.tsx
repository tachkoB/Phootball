import { FormEvent, useContext, useState } from "react"

// Components
import FootballField from "components/FootballField"

// Context
import { PlayerContext } from "contexts/players";

// Styles
import { Container, Input } from "../styled"
import { Section, SubmitButton } from './styled'

// Web worker
const worker = new Worker(new URL('../../workers/index.ts', import.meta.url));

export default function TeamBuilder() {
    const [budget, setBudget] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { players } = useContext(PlayerContext)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        worker.postMessage({ players, budget })

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
                <FootballField isLoading={isLoading} />
            </Container>
        </Section>
    )
}
