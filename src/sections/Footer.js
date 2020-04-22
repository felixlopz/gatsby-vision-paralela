import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/logo.svg'

const Wrapper = styled.section`
  padding-top: 10rem;
  background-image: linear-gradient(
    to right,
    var(--primary-dark-1),
    var(--primary-dark-3)
  );

  color: var(--white);
`

const StyledLogo = styled(Logo)`
  width: 26rem;
  height: 26rem;
  opacity: 0.03;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const ContactList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`
const ListItem = styled.li`
  line-height: 1;
  a {
    color: var(--color-white);
    font-size: 3.5rem;
    text-decoration: none;
    padding: 0em 0.2em;
    transition: all 0.3s ease-in;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media ${props => props.theme.mediaQueries.medium} {
    width: 70px;
    height: 70px;
    background: var(--color-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    outline: none;
    transition: all 0.3s ease-in;

    a {
      padding: 0.5em;
      outline: 0;

      &:focus {
        transform: rotateZ(360deg);
      }
    }
  }
`

const Copy = styled.div`
  p {
    padding: 0.8em 0;
    font-size: 1.2rem;
  }
  background: var(--primary-dark);
`

const Frase = styled.p`
  font-family: var(--nexa-bold);
  color: var(--primary);
  font-style: normal;
  font-size: 3.3rem;
  line-height: 2.8rem;
`

const Footer = props => {
  return (
    <>
      <Wrapper id="contact" className="container-fluid">
        <div className="text-center">
          <h1 className="title title--white">
            Contact
            <div className="title__underline title__underline--primary title__underline--center"></div>
          </h1>
          <Frase>Let's work together</Frase>
          <div className="m-5">
            <p className="text text--bold text--white mb-5">
              visionparalela@gmail.com
            </p>
            <p className="text text--white">+58 41499814544</p>
            <p className="text text--white">+1 9132922711</p>
            <p className="text text--bold text--white mt-5">
              <FontAwesomeIcon
                icon="map-marker-alt"
                style={{ marginRight: '2rem' }}
              />
              Puerto Ordaz, Venezuela.
            </p>
          </div>
        </div>
        <ContactList>
          <ListItem color="green">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'pinterest']} />
            </a>
          </ListItem>
          <ListItem color="blue">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'youtube']} />
            </a>
          </ListItem>
          <ListItem color="red">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </ListItem>
        </ContactList>
        <div className="text-center">
          <StyledLogo />
        </div>
      </Wrapper>
      <Copy className="container-fluid text-center">
        <p className="text text--white">
          All rights reserved - Vision Paralela &copy; 2020
        </p>
      </Copy>
    </>
  )
}

export default Footer
