import { useState } from "react"

// Components
import Table from "components/Table"

// Styles
import { Section, Input, SearchButton, Form } from "./styled"


/**
 *  Renders the homepage with the filter players functionality 
 */
const HomePage = () => {
    const [query, setQuery] = useState('')

    const handleChange = (text: string) => {
        setQuery(text)
    }

    const handleClick = () => {
        // search
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // search
    }

    return (
        <Section>
            <h1>Find your teammate</h1>
            <Form onSubmit={handleSubmit}>
                <Input value={query} onHandleChange={handleChange} />
                <SearchButton onClick={handleClick} text={'Search'} />
            </Form>
            <Table />
        </Section>
    )
}


export default HomePage