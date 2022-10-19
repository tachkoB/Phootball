import styled from "styled-components";

// Components
import InputText from "components/InputText";
import Button from "components/Button"


export const Section = styled.section`
    margin: 2rem auto 0 auto; 
    width: 60%;
    height: 40rem;

    > h1 {
        font-size: 3rem;
        text-align: center;
    }
`

export const Input = styled(InputText)`
    width: 100%;
`

export const SearchButton = styled(Button)`
    margin-left: 1rem;
`

export const Form = styled.form`
    margin-top: 2rem;
    display: flex;
`