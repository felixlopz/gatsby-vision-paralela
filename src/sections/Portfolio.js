import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledPortofolio = styled.section`
  background: var(--black);
  padding-top: 4rem;
  padding-bottom: 4rem;
`

const Socials = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 3.6rem;
  margin-bottom: 3.6rem;

  li {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  a {
    width: 40px;
    height: 40px;
    display: block;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 50%;
    font-size: 2rem;
  }
`

const PortfolioItem = styled.article`
  background: #0e0e0e;
  max-width: 346px;

  .item {
    &__heading {
      width: 100%;
      height: 235px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__body {
      padding: 2rem;
    }

    &__title {
      display: inline-block;
      font-family: var(--bjorn);
      font-size: 18px;
      line-height: 14px;
      margin-bottom: 1rem;
      color: white;

      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 20%;
        background: var(--primary);
        height: 2px;
        transform: skewX(-30deg);
      }
    }

    &__text {
      margin: 1rem 0;
      color: white;
      font-family: var(--nexa-light);
      font-size: 16px;
      line-height: 20px;
    }

    &__link {
      font-family: var(--nexa-light);
      font-size: 16px;
      line-height: 18px;
      color: #eb00d7;
    }
  }
`

const Portfolio = props => {
  return (
    <StyledPortofolio className="container-fluid">
      <div className="container">
        <div className="text-center">
          <h1 className="title title--white">
            Portfolio
            <div className="title__underline title__underline--secondary title__underline--center"></div>
          </h1>
          <p className="text text--bold text--white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            sodales
          </p>
        </div>
        <div>
          <Socials>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
            </li>
          </Socials>
        </div>

        <PortfolioItem>
          <div className="item__heading">
            <img
              src="https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div className="item__body">
            <h3 className="item__title">mountains and a house</h3>
            <p className="item__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc Lorem ipsum dolor sit Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              Lorem ipsum dolor sit
            </p>
            <div className="text-right">
              <a href="#" className="item__link">
                view more
              </a>
            </div>
          </div>
        </PortfolioItem>
      </div>
    </StyledPortofolio>
  )
}

export default Portfolio
