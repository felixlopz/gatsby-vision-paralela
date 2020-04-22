import React from 'react'
import styled from 'styled-components'
import Image from '../components/Image'

// import ServicesPhotoOne from '../assets/images/services-1.png'

const StyledServices = styled.section`
  padding-top: 6rem;
`

const ServicesCol = styled.div`
  padding-top: 3.4rem;
  padding-bottom: 3.4rem;
  margin-top: 1rem;
  margin-bottom: 5rem;
  background: ${props =>
    `linear-gradient(128deg,var(--${props.color}),var(--${props.color}-dark) )`};

  @media ${props => props.theme.mediaQueries.medium} {
    background: white;
  }
`

const ServicesItem = styled.div`
  width: 18.7rem;
  height: 20rem;
  background: white;

  @media ${props => props.theme.mediaQueries.medium} {
    box-shadow: 10px 10px 80px rgba(169, 169, 169, 0.5);
    width: 331px;
    height: 355px;
    position: relative;
    z-index: 3;

    &::before,
    &::after {
      content: '';
      position: absolute;
    }
  }
`

const Services = () => {
  return (
    <StyledServices className="container">
      <div className="text-center text-md-left">
        <h1 className="title" style={{ marginBottom: '7rem' }}>
          Services
          <div className="title__underline title__underline--primary title__underline--center"></div>
        </h1>
      </div>
      <div className="row align-items-md-center">
        <div className="col-12 col-md-6">
          <h2 className="sub-title">Personal Branding</h2>
          <p className="text">
            Our personal branding is oriented on creating brands far beyond the
            person, by giving attributes that are unique and easy to recognize.
          </p>
        </div>
        <ServicesCol
          className="col-12 col-md-6 d-flex justify-content-center"
          color="primary"
        >
          <ServicesItem>
            <Image filename="services-1.png" />
          </ServicesItem>
        </ServicesCol>
      </div>
      <div className="row align-items-md-center">
        <div className="col-12 col-md-6">
          <h2 className="sub-title">Content creation</h2>
          <p className="text">
            We develop content that helps startups and innovation teams uncover
            and communicate their compelling value.
          </p>
        </div>
        <ServicesCol
          className="col-12 col-md-6 d-flex justify-content-center"
          color="secondary"
        >
          <ServicesItem>
            <Image filename="services-2.png" />
          </ServicesItem>
        </ServicesCol>
      </div>
      <div className="row align-items-md-center">
        <div className="col-12 col-md-6">
          <h2 className="sub-title">Audiovisual production</h2>
          <p className="text">
            Audiovisual content as short films and advertising spots allow us to
            innovate and expand our services. We count with our own team of
            audiovisual experts.
          </p>
        </div>
        <ServicesCol
          className="col-12 col-md-6 d-flex justify-content-center"
          color="tertiary"
        >
          <ServicesItem>
            <Image filename="services-3.png" />
          </ServicesItem>
        </ServicesCol>
      </div>
    </StyledServices>
  )
}

export default Services
