import styled from 'styled-components';
import media from '../helpers/media.style';

/**
 * @type any
 */
const BrowserWindow = styled.div`
  position: relative;
  display: flex;
  align-items : center;
  min-height: 384px;
  width: 100%;
  /* width: 683px; */
  /* padding-bottom: 56%; */
  max-height: fit-content;
  border-radius: 10px;
  background-color: ghostwhite;
  box-shadow: 0 5px rgba(0,0,0,0.2); 
  overflow: hidden;
  margin: 0 auto;


  .fake-nav {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: ghostwhite;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    padding: 7px;
    i {
      position: absolute;
      left : 20px;
      width: 15px;
      height: 15px; 
      border-radius: 50%;
      :nth-child(1) { background-color: rgb(253, 47, 47); }
      :nth-child(2) {
        background-color: rgb(253, 140, 47);
        margin-left: 30px;
      }
      :nth-child(3) {
        background-color: rgb(43, 170, 26);
        margin-left: 60px;
      }
    }
  }

  img {
    position: absolute;
    top: ${props => props.hideNav ? '0px' : '30px'};
    left: 0;
    width: 100%;
    height: auto;
    ${media.tablet`
      position: initial;
    `}
  }

  iframe {
    position: absolute;
    height : ${props => props.youtube ? '93%' : '100%'};
    top: ${props => props.hideNav ? '0px' : '30px'};
    left : 0px;
    z-index: 0;
  }
`;


export default BrowserWindow;