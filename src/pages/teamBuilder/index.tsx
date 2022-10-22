import { useState } from "react"

// Components
import FootballField from "components/FootballField"

// Styles
import { Container, Input } from "../styled"
import { Section } from './styled'

export default function TeamBuilder() {
    const [value, setValue] = useState('')
    return (
        <Section>
            <h1>Team builder</h1>
            <Container>
                <div>
                    <Input onHandleChange={setValue} value={value} placeholder={'Your budget'} />
                </div>
                <FootballField />
            </Container>
        </Section>
    )
}
