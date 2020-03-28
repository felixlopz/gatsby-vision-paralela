import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll'

const StyledLogo = styled(Logo)`
  width: 3rem;
  height: 3rem;
  position: relative;
  z-index: 10;
`

const Wrapper = styled.div`
  background-image: linear-gradient(
    to right,
    var(--primary-dark-1),
    var(--primary-dark-3)
  );
  color: var(--color-white);
  width: 100%;
  position: fixed;
  z-index: 4;
`

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const StyledNavbar = styled.div`
  width: 100%;
  padding: 0.8em 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  width: 45px;
  cursor: pointer;
  transition: opacity 0.3s ease-in;

  &:hover,
  &:focus {
    opacity: 0.75;
  }
`
const MenuButton = styled.div`
  width: 25px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
  cursor: pointer;
  position: relative;
  /* background: pink; */

  div {
    width: 100%;
    height: 0.2rem;
    background: var(--white);
    position: absolute;
    transform: skewX(-35deg);
    transition: all 0.3s ease;
  }

  div:first-child {
    top: ${props => (props.isNavOpen ? 'auto' : 0)};
    transform: ${props => (props.isNavOpen ? 'rotate(45deg)' : '')};
  }

  div:nth-child(2) {
    opacity: ${props => (props.isNavOpen ? 0 : 1)};
  }

  div:last-child {
    bottom: ${props => (props.isNavOpen ? 'auto' : 0)};
    transform: ${props => (props.isNavOpen ? 'rotate(-45deg)' : '')};
  }
`

const Navigation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right,
    var(--primary-dark-1),
    var(--primary-dark-3)
  );

  z-index: 5;
  transition: all 0.4s ease;
  opacity: ${props => (props.isNavOpen ? 1 : 0)};
  transform: ${props =>
    props.isNavOpen ? 'translateY(0)' : 'translateY(-100%)'};

  display: flex;
  align-items: center;

  div {
    z-index: -1;
    position: absolute;
    width: 140%;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    /* background: pink; */
    opacity: 0.03;
    svg {
      width: 100%;
      height: auto;
    }
  }

  @media ${props => props.theme.mediaQueries.medium} {
    position: static;
    background: transparent;
    flex-basis: 30%;
    height: 100%;
    transform: translateY(0);
    opacity: 1;
    justify-content: space-between;
  }
`

const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  list-style: none;
  opacity: ${props => (props.isNavOpen ? 1 : 0)};
  transition: ${props => (props.isNavOpen ? 'opacity 0.3s 0.35s ease' : '')};

  @media ${props => props.theme.mediaQueries.small} {
    opacity: 1;
    flex-direction: row;
    justify-content: flex-end;
  }
`
const NavLink = styled.li`
  &:not(:last-child) {
    margin-bottom: 2rem;

    @media ${props => props.theme.mediaQueries.small} {
      margin-bottom: 0;
      margin-right: 3rem;
    }
  }

  a {
    font-family: var(--bjorn);
    font-size: 3rem;
    padding: 0.1em 0.3em;
    text-decoration: none;
    color: var(--white);
    text-transform: uppercase;

    @media ${props => props.theme.mediaQueries.small} {
      font-size: 1.3rem;
      cursor: pointer;
      transition: color 0.3s ease-in;

      &:hover,
      &:focus {
        color: var(--color-blue-lg);
      }
    }
  }

  @media ${props => props.theme.mediaQueries.small} {
    &:first-child {
      display: none;
    }
  }
`

const Navbar = props => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    if (window.innerWidth >= 600) return

    !isNavOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible')
    setIsNavOpen(!isNavOpen)
  }

  return (
    <Wrapper>
      <Container>
        <StyledNavbar>
          <LogoContainer>
            <Link to="home" spy={true} smooth={true} duration={1000}>
              <StyledLogo />
            </Link>
          </LogoContainer>

          <MenuButton
            className="d-md-none"
            onClick={() => toggleNav()}
            isNavOpen={isNavOpen}
          >
            <div></div>
            <div></div>
            <div></div>
          </MenuButton>

          <Navigation isNavOpen={isNavOpen}>
            <div>
              <Logo />
            </div>
            <NavList isNavOpen={isNavOpen}>
              <NavLink>
                <Link
                  onClick={() => toggleNav()}
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  Services
                </Link>
              </NavLink>
              <NavLink>
                <Link
                  onClick={() => toggleNav()}
                  to="portfolio"
                  spy={true}
                  offset={-62}
                  smooth={true}
                  duration={1000}
                >
                  Portfolio
                </Link>
              </NavLink>
              <NavLink>
                <Link
                  onClick={() => toggleNav()}
                  to="products"
                  spy={true}
                  offset={-62}
                  smooth={true}
                  duration={1000}
                >
                  products
                </Link>
              </NavLink>
              <NavLink>
                <Link
                  onClick={() => toggleNav()}
                  to="about"
                  spy={true}
                  offset={-62}
                  smooth={true}
                  duration={1000}
                >
                  about
                </Link>
              </NavLink>
              <NavLink>
                <Link
                  onClick={() => toggleNav()}
                  to="contact"
                  spy={true}
                  offset={-62}
                  smooth={true}
                  duration={1000}
                >
                  contact
                </Link>
              </NavLink>
            </NavList>
          </Navigation>
        </StyledNavbar>
      </Container>
    </Wrapper>
  )
}

export default Navbar
