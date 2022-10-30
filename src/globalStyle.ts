import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const globalStyle = createGlobalStyle `
  body, html {
    margin: 0;
    padding: 0;
    background-color: #0A1325
  }
`

export const Main = styled.main `
    padding: 2%;

    h1 {
    font-family: 'DM Sans';
    color: #fff;
    }
`

export default globalStyle