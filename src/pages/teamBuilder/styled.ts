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
    }

    > div > form > button {
        margin-left: 1rem;
    }
`

export const SubmitButton = styled(PrimaryButton)``