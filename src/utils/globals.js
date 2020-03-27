import { createGlobalStyle } from 'styled-components'

import fontFaces from './fonts'

export default createGlobalStyle`
  :root{
    --primary:${props => props.theme.colors.primary};
    --primary-dark:${props => props.theme.colors.primaryDark};
    --primary-dark-1:${props => props.theme.colors.primaryDarkOne};
    --primary-dark-2:${props => props.theme.colors.primaryDarkTwo};
    --primary-dark-3:${props => props.theme.colors.primaryDarkThree};
    --secondary:${props => props.theme.colors.secondary};
    --secondary-dark:${props => props.theme.colors.secondaryDark};
    --tertiary:${props => props.theme.colors.tertiary};
    --tertiary-dark:${props => props.theme.colors.tertiaryDarker};
    --gray-dark:${props => props.theme.colors.grayDark};
    --gray-light:${props => props.theme.colors.grayLight};
    --black:${props => props.theme.colors.black};
    --black-1:${props => props.theme.colors.blackOne};
    --black-2:${props => props.theme.colors.blackTwo};
    --text:${props => props.theme.colors.text};
  }

  ${fontFaces}

  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    /* 1rem = 10px */
    font-size: 62.5%; 
    box-sizing: border-box;
    --color-white: ${props => props.theme.colors.white};
    --color-blue: ${props => props.theme.colors.blue};
    --color-blue-lg: ${props => props.theme.colors.blueLight};
    --color-green: ${props => props.theme.colors.green};
    --color-red: ${props => props.theme.colors.red};
    --color-light: ${props => props.theme.colors.light};
    --color-dark: ${props => props.theme.colors.dark};
    --color-darker: ${props => props.theme.colors.darker};
  }
  body {
    font-family: 'NexaLight' , sans-serif;
    background: var(--white);
    color: var(--text);
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  
  form,
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`
