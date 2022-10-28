import styled from "styled-components";

// Button
import PrimaryButton from "components/Button";

export const Section = styled.section`
    padding: 2rem;
    height: 40rem;
    text-align: center;

    > h1 {
        font-size: 3rem;
        text-align: center;

        @media (max-width: 768px) {
            font-size: 2rem;
        } 
    }

    > div > form > button {
        margin-left: 1rem;
    }
`

export const SubmitButton = styled(PrimaryButton)`
    @media (max-width: 768px) {
        margin: 2rem 0 0 0 !important;
        width: 100%;
    } 
`

export const Error = styled.p`
    color: red;
    margin-top: 1rem;
    font-size: 1rem;
`