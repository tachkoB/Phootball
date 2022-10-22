
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
    }
`
export const Container = styled.div`
    padding: 2rem;
`

export const Input = styled(InputText)`
    width: 33%;
    `
