import styled from 'styled-components';
import media from '../helpers/media.style';

export const IntroWrapper = styled.section`
  .bg_svg {
    position: relative;
    width: 600px;
    height: 600px;
  }
  
  .intro__content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid white;
    /* position: relative; */
  }

  .intro__text {
    color : white;
    margin: auto;
    font-family: 'Lobster', cursive;
    font-size: 2rem;
    line-height: 15px;
    text-align: left;
    will-change: transform, opacity;
  }
    
  .intro__text p:nth-child(1) {
    font-size: 50px;
  }

  .slogan {
    font-family: 'Muli', sans-serif;
    font-size : 18px;
  }

  .avtr-animated {
    will-change: transform, opacity;
    flex: none;
    margin: auto;
  }

  
  
  .find-more {
    display: block;
    height : auto;
    font-size: 14px;
    width: fit-content;
    transform: translateX(-50%);
    bottom: 48px;
    left: 50%;
    position: absolute;
    z-index: 1;

    ${media.tablet`
      display: none;
    `}
  }
  .find-more:before {
    content: ' ';
    width: 2px;
    height: 50px;
    background-color: white;
    position: absolute;
    left: 50%;
    margin: 0;
    padding: 0;
    top: 100%;
  }

  .btn-outline {
    cursor: pointer;
    width: auto;
    text-align: center;
    padding: 10px;
    color : white;
    border: 2px solid white;
    border-radius : 5px;
  }
  .btn-outline:hover {
    background-color : white;
    color : ${props => props.theme.primary}
  }

  ${media.tablet`
    width: 100%;
    margin: 0 auto !important;
    
    .intro__content {
      width: 100%;
      padding-top: 15%;
      display: block;
    }
    .intro__text {
      text-align: center !important;
    }
    .intro__text p {
      line-height: 20px;
    }
    .intro__text p:not(:last-child) {
      line-height: 50px;
      font-size: 1.1em !important;
      margin: 0;
    }
  `} 
  
`;