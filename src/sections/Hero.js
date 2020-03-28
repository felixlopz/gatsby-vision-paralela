import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BackgroundImage from 'gatsby-background-image'

const StyledSection = styled.section`
  padding-top: 10rem;
`
const StyledHeroForm = styled.form`
  width: 25rem;
  margin: 0 auto;
  margin-top: 4.8rem;
  margin-bottom: 8rem;

  @media ${props => props.theme.mediaQueries.theme} {
    width: 50rem;
  }
`

const Banner = styled.div`
  padding-top: 8rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "fotographer.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage fluid={imageData} className="banner">
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const Hero = () => {
  return (
    <>
      <StyledSection id="home" className="container">
        <div className="text-center">
          <h1 className="title">
            Tools and Services <br></br> for your Brand
          </h1>
          <p className="text text--bold">
            Lorem ipsum dolor sit amet, consectetur
            <br></br>adipiscing elit. Nunc sodales
          </p>
        </div>

        <StyledHeroForm className="text-center">
          <div className="form-row justify-content-between">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Your name"
                />
                <span className="form-group__border"></span>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="example@mail.com"
                />
                <span className="form-group__border"></span>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-secondary btn-block">
            subscribe
          </button>
        </StyledHeroForm>
      </StyledSection>
      <BackgroundSection>
        <div className="banner__overlay"></div>
        <Banner className="container h-100">
          <h1 className="title title--white">
            we make it <br></br>
            <span className="title--primary">possible</span>
          </h1>
          <div className="text-center">
            <p className="text text--bold text--white">Digital Agency</p>
          </div>
        </Banner>
      </BackgroundSection>
    </>
  )
}

export default Hero
