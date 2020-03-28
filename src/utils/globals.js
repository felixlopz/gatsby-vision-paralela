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
    --tertiary-dark:${props => props.theme.colors.tertiaryDark};
    --gray-dark:${props => props.theme.colors.grayDark};
    --gray-light:${props => props.theme.colors.grayLight};
    --black:${props => props.theme.colors.black};
    --black-1:${props => props.theme.colors.blackOne};
    --black-2:${props => props.theme.colors.blackTwo};
    --text:${props => props.theme.colors.text};

    --bjorn: 'Bjorn', sans-serif;
    --nexa-bold: 'NexaBold', sans-serif;
    --nexa-light: 'NexaLight', sans-serif;
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
  }
  body {
    font-family: 'NexaLight' , sans-serif;
    background: var(--white);
    color: var(--text);
    line-height: 1;
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

  h1,h2,h3,h4,h5,h6,p,ul{
    margin: 0;
  }

  /* Typography */

  .title{
    font-family: var(--bjorn);
    display: inline-block;
    font-size: 3rem;
    line-height: 2.8rem;
    letter-spacing: 1px;
    margin-bottom: 0.93333em;

    &--white{
      color: var(--white);
    }

    &--primary{
      color: var(--primary);
    }

    &__underline{
     
      margin-top: 0.4rem;
      width: 6.4rem;
      height: 3px;
      position: relative;

      &::before, &::after{
        content:'';
        position: absolute;
        height: 100%;
        width: 45%;
        transform: skewX(-30deg);
      }

      &::before{
        left: 0;
      }

      &::after{
        right: 0;
      }

      &--primary::before,&--primary::after{
        background: var(--primary);
      }
      &--secondary::before,&--secondary::after{
        background: var(--secondary);
      }

      &--center{
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  .sub-title{
    font-family: var(--nexa-bold);
    font-size: 2.4rem;
    margin-bottom: 0.708em;
    text-transform: capitalize;

    &--primary{
      color: var(--primary);
    }
  }

  .text{
    font-family: var(--nexa-light);
    font-size: 1.5rem;
    line-height: 1.8rem;

    &--bold{
      font-family: var(--nexa-bold);
      font-size: 1.8rem;
      line-height: 1.8rem;
    }

    &--white{
      color: var(--white);
    }
  }

  /* Forms */

  .form-group{
    text-align: left;
    margin-bottom: 5.4rem;
   
    label{
      font-family: var(--nexa-bold);
      font-size: 1.6rem;
      text-transform: capitalize;
      margin-bottom: 0;
    }

    .form-control{
      border:none;
      padding: 0;
      font-size: 1.4rem;

      &::placeholder{
        color: #C4C4C4;
      }

      &:focus{
        border: none;
        outline: 0;
        box-shadow: none;
      }

      &:focus + span {
        background-color: var(--secondary);
      }
    }

    &__border{
      width: 100%;
      height: 3px;
      background-color: var(--secondary-dark);
      transform: skewX(-35deg);
      display: block;
      transition: background-color 0.3s ease; 
    }
  }

  /* Buttons */

  .btn{
    font-family: var(--bjorn);
    font-size: 2.4rem;
    letter-spacing: 1px;
    padding: 0.75em 0.5em;
    border: 0;
    border-radius: 0;
  }

  .btn-primary{
    background-color: var(--white);

    &:active, &:focus, &:hover{
      background-color: var(--primary-dark);
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(var(--primary-dark), 10);
    }
  }


  .btn-primary-dark{
    color: var(--white);
    background-color: var(--primary-dark);

    &:active, &:focus, &:hover{
      color: var(--white);
      background-color: var(--primary);
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(var(--primary), 10);
    }
  }

  .btn-secondary{
    background-color: var(--secondary);

    &:active, &:focus, &:hover{
      background-color: var(--secondary-dark);
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(var(--secondary-dark), 10);
    }
  }

  /* Hero Banner */
  .banner {
    height: 34.8rem;
    background-position: 70% center;

    &__overlay{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.9;
      z-index: -1;
    }
  }

  @media ${props => props.theme.mediaQueries.medium}{
    .title{
      font-size: 48px;
      line-height: 46px;


      &__underline{
        height: 6px; 
        width: 16rem;

        &--center{
          margin-left: 0;
        }
      }
    }

    .sub-title{
      font-size: 30px;
      line-height: 50px;
    }


    .text{
      font-size: 22px;
      line-height: 23px;
      &--bold{
        font-size: 24px;
        line-height: 33px;
      }
    }


    .form-group{

      label{
        font-size: 30px;
        line-height: 30px;
      }

      .form-control{
        font-size: 20px;
        line-height: 20px;
      }

    }

    .banner{
      height: 50rem;


    }

  }






`
