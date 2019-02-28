import styled from 'styled-components';
import media from '../helpers/media.style';

export const NavWrapper = styled.div`
  position: fixed;
  top: ${props => props.shrink ? '-35px' : '0'};
  left: 0;
  width: 100%;
  height: 45px;
  padding: 0 70px;
  transition: 0.1s;
  z-index: 2;
  
  display: flex;
  align-content: center;
  user-select: none;

  background-color: white;
  box-shadow: 0px 6px 10px 1px rgba(0, 0, 0, 0.08);

  .active {
    color: white;
    background-color: ${props => props.theme.primary} !important;
  }
  
  .nav__title {
    font-family: 'Lobster', cursive;
    color: transparent;
    background: ${prop => prop.theme.grad};
    margin: auto;
    margin-left: 0;
    transition: 0.2s;

    background-clip: text;
    -webkit-background-clip: text;
    opacity: ${props => props.shrink ? '0' : '1'};
  }


  .burger {
    display: none;
    flex-direction: column;
    width : 45px;
    height: 40px;
    float: right;
    padding: 5px;
    margin: auto 0;
    cursor: pointer;
    border-radius : 5px;
    /* outline : 1px solid black; */

    &:hover {
      box-shadow : 0px 0px 15px 5px rgba(0,0,0,0.1) 
    }
    div {
      width : 100%;
      margin: auto;
      height: 3px;
      border-radius: 20px;
      background-color : ${prop => prop.theme.primary};
    }
  }

  ${media.tablet`
    padding: 0 10px;

    .burger {
      display: flex;
    }
  `}
`;
