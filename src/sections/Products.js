import React from 'react'
import styled from 'styled-components'

import ProductCard from '../components/ProductCard'
import ProductSlider from '../components/ProductSlider'

const StyledProducts = styled.section`
  padding-bottom: 8rem;
  overflow-x: hidden;
`

const products = [
  {
    url:
      'https://images.pexels.com/photos/2749500/pexels-photo-2749500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    id: '' + Math.random(),
    name: 'luts pack',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit',
    price: 2.99,
  },
  {
    url:
      'https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    id: '' + Math.random(),
    name: 'ice pack',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit',
    price: 2.99,
  },
  {
    url:
      'https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    id: '' + Math.random(),
    name: 'nature pack',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Lorem ipsum dolor sit',
    price: 2.99,
  },
]

const Products = () => {
  return (
    <StyledProducts>
      <div className="container">
        <div className="text-center">
          <h1 className="title" style={{ fontSize: '2.4rem' }}>
            Take a look to our <br></br> gallery of products
          </h1>
        </div>
        <div className="mt-5">
          <ProductSlider
            options={{
              type: 'slider',
              rewind: true,
              startAt: 0,
              focusAt: 0,
              perView: 1.5,
              gap: 50,
            }}
          >
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductSlider>
        </div>
      </div>
    </StyledProducts>
  )
}

export default Products
