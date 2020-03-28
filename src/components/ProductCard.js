import React from 'react'
import styled from 'styled-components'

const Card = styled.article`
  width: 20.7rem;
  height: 22.5rem;
  background: var(--white);
  box-shadow: 2px 2px 10px rgba(169, 169, 169, 0.2);
  display: flex;
  flex-direction: column;

  .card {
    &__heading {
      width: 100%;
      height: 12.3rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__body {
      padding: 0.8rem 1.1rem 0 0.8rem;
    }

    &__title {
      display: inline-block;
      font-family: var(--bjorn);
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 1rem;

      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 40%;
        background: var(--primary);
        height: 2px;
        transform: skewX(-30deg);
      }
    }

    &__text {
      font-family: var(--nexa-light);
      font-size: 10px;
      line-height: 10px;
    }

    &__footer {
      margin-top: auto;
      padding: 0 1.1rem 0.8rem 1.1rem;
    }

    &__price {
      font-family: var(--nexa-bold);
      font-size: 14px;
      line-height: 14px;
    }

    &__link {
      font-family: var(--bjorn);
      font-size: 8px;
      line-height: 9px;
      color: black;
    }
  }
`

const ProductCard = ({ product }) => {
  return (
    <Card>
      <div className="card__heading">
        <img src={product.url} />
      </div>
      <div className="card__body text-left">
        <h3 className="card__title">{product.name}</h3>
        <p className="card__text">{product.desc}</p>
      </div>
      <div className="card__footer d-flex justify-content-between">
        <span className="card__price">${product.price}</span>
        <a href="#" className="card__link">
          more info
        </a>
      </div>
    </Card>
  )
}

export default ProductCard
