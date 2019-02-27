import styled from 'styled-components';
import media from '../helpers/media.style';

const LightboxWrapper = styled.div`
  display: block;

  img {
    position: absolute;
    left: 25%;
    top: 10%;
    width: 50%;
    touch-action: none;
    ${media.tablet`
      left : 0%;
      top : 30%;
      width : 100%;
    `}
  }

  .gestureArea {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: block;
  }

  .lightbox {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close {
    display: block;
    padding: 20px;
    cursor: pointer;
    position: absolute;
    top: 10%;
    left: 80%;
    color: white;
    border-radius: 50%;
    transition: 0.2s;
  }

  .close:hover {
    color: ${props => props.theme.secondaryLight};
    transform: rotate(180deg);
  }
`;

export default LightboxWrapper;