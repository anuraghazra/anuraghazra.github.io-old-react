import { css } from 'styled-components';
const sizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1200
};


const media = Object.keys(sizes).reduce((finalmedia, size) => {
  return {
    ...finalmedia,
    [size]: function (...args) {
      return css`
        @media (max-width : ${sizes[size]}px) {
          ${css(...args)}
        }
      `
    }
  }
}, {})

export default media;