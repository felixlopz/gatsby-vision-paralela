import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from '../components/Image'

const items = [
  {
    id: Math.random() + '',
    title: 'Love without limits',
    description:
      'adjsldjaklsjkldjaklsjdkljakl dkljasjld jasakldj la jsldj aljsdkljalkj slkadjsaj ajlsj lkadjlkajs kljalsjakljkl jaklsda',
    link: 'https://www.youtube.com/watch?v=CXk_7GJDdvA',
    image: 'portfolio-1.jpg',
  },
  {
    id: Math.random() + '',
    title: 'Yummy dance video',
    description:
      'adjsldjaklsjkldjaklsjdkljakl dkljasjld jasakldj la jsldj aljsdkljalkj slkadjsaj ajlsj lkadjlkajs kljalsjakljkl jaklsda',
    link: 'https://youtu.be/CrILMPuQw2A',
    image: 'portfolio-2.jpg',
  },
  {
    id: Math.random() + '',
    title: 'Everything its better together',
    description:
      'adjsldjaklsjkldjaklsjdkljakl dkljasjld jasakldj la jsldj aljsdkljalkj slkadjsaj ajlsj lkadjlkajs kljalsjakljkl jaklsda',
    link:
      'https://www.pinterest.com/visionparalelave/fotos/juntos-todo-es-mejor/',
    image: 'portfolio-3.jpg',
  },
  {
    id: Math.random() + '',
    title: 'Ivana',
    description:
      'adjsldjaklsjkldjaklsjdkljakl dkljasjld jasakldj la jsldj aljsdkljalkj slkadjsaj ajlsj lkadjlkajs kljalsjakljkl jaklsda',
    link: 'https://www.pinterest.com/visionparalelave/fotos/ivana/',
    image: 'portfolio-4.jpg',
  },
  {
    id: Math.random() + '',
    title: 'Emily Madrid',
    description:
      'adjsldjaklsjkldjaklsjdkljakl dkljasjld jasakldj la jsldj aljsdkljalkj slkadjsaj ajlsj lkadjlkajs kljalsjakljkl jaklsda',
    link: 'https://www.pinterest.com/visionparalelave/fotos/emily-madrid/',
    image: 'portfolio-5.jpg',
  },
  {
    id: Math.random() + '',
    title: 'Gabriela Mendoza',
    description:
      'adjsldjaklsjkldjaklsjdkljakl dkljasjld jasakldj la jsldj aljsdkljalkj slkadjsaj ajlsj lkadjlkajs kljalsjakljkl jaklsda',
    link: 'https://www.pinterest.com/visionparalelave/fotos/gabriela-mendoza/',
    image: 'portfolio-7.jpg',
  },
]

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

const StyledPortfolioItem = styled.article`
  background: #0e0e0e;
  max-width: 346px;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  .item {
    &__heading {
      width: 346px;
      height: 360px;
    }

    &__body {
      padding: 2rem;
    }

    &__title {
      display: inline-block;
      font-family: var(--bjorn);
      font-size: 18px;
      line-height: 21px;
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

const PortfolioItem = ({ item }) => {
  return (
    <StyledPortfolioItem>
      <div className="item__heading">
        <Image filename={item.image} />
      </div>
      <div className="item__body">
        <h3 className="item__title">{item.title}</h3>
        <p className="item__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem
          ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc Lorem ipsum dolor sit Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc Lorem ipsum dolor sit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor
          sit
        </p>
        <div className="text-right">
          <a target="_blank" href={item.link} className="item__link">
            view more
          </a>
        </div>
      </div>
    </StyledPortfolioItem>
  )
}

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
            Let your inspiration goes wherever you wants, that is what we do.
          </p>
        </div>
        <div>
          <Socials>
            <li>
              <a
                target="_blank"
                href="https://www.pinterest.com/visionparalelave/"
              >
                <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCqVoJR3qBp_dVOgGD8OYI5Q"
                target="_blank"
              >
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/visionparalela.ve/"
                target="_blank"
              >
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
            </li>
          </Socials>
        </div>
        <div className="d-md-none">
          {items.map((item, index) => (
            <PortfolioItem key={index} item={item} />
          ))}
        </div>
      </div>
    </StyledPortofolio>
  )
}

export default Portfolio
