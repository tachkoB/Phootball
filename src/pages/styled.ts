
import styled, { createGlobalStyle } from 'styled-components'

// Components
import InputText from "components/InputText";

// Colors
import { colors } from 'colors/index'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

body {
    height: 100vh;
    background-color: ${colors.primary};
}
`

export const Section = styled.section`
   padding: 2rem;
   height: 40rem;

    > h1 {
        font-size: 3rem;
        text-align: center;
          
        @media (max-width: 768px) {
            font-size: 2rem;
        } 
    }
`
export const Container = styled.div`
    margin-top: 2rem;
    @media (min-width: 768px) {
        padding: 2rem;
        margin-top: 0;
    } 
`

export const Input = styled(InputText)`
    width: 33%;

    @media (max-width: 768px) {
        width: 100%;
        } 
`
