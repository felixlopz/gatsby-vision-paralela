import React from 'react'
import { graphql } from 'gatsby'
// import styled from 'styled-components'

import Layout from '../components/layout'
import GoToTop from '../components/GoToTop'

// sections
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Products from '../sections/Products'
import Portfolio from '../sections/Portfolio'
import About from '../sections/About'
import Footer from '../sections/Footer'

const PortfolioIndex = ({ data, ...props }) => {
  return (
    <Layout location={props.location} title={''}>
      <Hero />
      <Services />
      <Products />
      <Portfolio />
      <About />
      <Footer />
    </Layout>
  )
}

export default PortfolioIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
