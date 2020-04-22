import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import SEO from '../components/seo'

// Styled components theme
import theme from '../utils/theme'
import GlobalStyles from '../utils/globals'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faEnvelope,
  faLink,
  faCode,
  faChevronUp,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Navbar from '../components/Navbar'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const StyledMain = styled.main`
  position: relative;
`

library.add(
  fab,
  faLink,
  faCode,
  faBars,
  faEnvelope,
  faChevronUp,
  faMapMarkerAlt
)

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Vision Paralela" />
      <Navbar />
      <StyledMain>{children}</StyledMain>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default Layout
