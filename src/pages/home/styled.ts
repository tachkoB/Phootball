import styled from "styled-components";

// Components
import InputText from "components/InputText";


export const Section = styled.section`
   padding: 2rem;
   height: 40rem;

    > h1 {
        font-size: 3rem;
        text-align: center;
    }
`

export const Input = styled(InputText)`
    width: 33%;
    `
export const Container = styled.div`
    margin-top: 3rem;
    padding: 2rem;
`