import { css } from 'styled-components'

// Fonts
import BjornRegularWoff from '../assets/fonts/BjornRegular.woff'
import BjornRegularWoff2 from '../assets/fonts/BjornRegular.woff2'
import NexaBoldWoff from '../assets/fonts/NexaBold.woff'
import NexaBoldWoff2 from '../assets/fonts/NexaBold.woff2'
import NexaLightWoff from '../assets/fonts/NexaLight.woff'
import NexaLightWoff2 from '../assets/fonts/NexaLight.woff2'

export const fontFaces = css`
  @font-face {
    font-family: 'Bjorn';
    src: local('Bjorn'), local('Bjorn'),
      url(${BjornRegularWoff2}) format('woff2'),
      url(${BjornRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NexaBold';
    src: local('NexaBold'), local('NexaBold'),
      url(${NexaBoldWoff2}) format('woff2'), url(${NexaBoldWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'NexaLight';
    src: local('NexaLight'), local('NexaLight'),
      url(${NexaLightWoff2}) format('woff2'),
      url(${NexaLightWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`

export default fontFaces
