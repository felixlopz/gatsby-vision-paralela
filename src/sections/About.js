import React from 'react'
import styled from 'styled-components'

const StyledAboutUs = styled.section`
  background: var(--black);
  padding-top: 4rem;
  padding-bottom: 4rem;
`

const About = props => {
  return (
    <StyledAboutUs className="container-fluid">
      <div className="container">
        <div className="text-center">
          <h1 className="title title--white">Who we are</h1>
          <p className="text text--bold text--white mb-5">
            Vision Paralela is an independant brand agency dedicated to create
            audivisual and digital products to help innovation brands and
            startups to reach their customers based on Puerto Ordaz, Venezuela.
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="sub-title sub-title--primary ">Our Mision</h2>
            <p className="text text--white mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lacinia placerat commodo. Aliquam metus magna, pellentesque eu
              euismod eget, vulputate eget nisi. Suspendisse magna orci,
            </p>
          </div>
          <div className="col-12">
            <h2 className="sub-title sub-title--primary">Our vision</h2>
            <p className="text text--white mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lacinia placerat commodo. Aliquam metus magna, pellentesque eu
              euismod eget, vulputate eget nisi. Suspendisse magna orci,
            </p>
          </div>
        </div>
      </div>
    </StyledAboutUs>
  )
}

export default About
