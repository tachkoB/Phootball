
import { createGlobalStyle } from 'styled-components'

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