import styled from 'styled-components';
import media from '../helpers/media.style';
import Link from 'react-scroll/modules/components/Link';

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height : ${props => props.shrink ? '35px' : '50px'};
  padding: 0 70px;
  transition: 0.2s;
  
  display: flex;
  align-content: center;
  z-index: 5;
  user-select: none;

  background-color : white;
  box-shadow: 0px 6px 10px 1px rgba(0, 0, 0, 0.08);


  .active {
    color : white;
    background-color: ${props => props.theme.primary} !important;
  }
  
  .nav__title {
    font-family: 'Lobster', cursive;
    color: transparent;
    background: ${prop => prop.theme.grad};
    margin: auto;
    margin-left: 0;
    font-size : ${props => props.shrink ? '1.2em' : 'auto'};
    transition: 0.2s;

    background-clip: text;
    -webkit-background-clip: text;
  }

  .nav__items {
    display: flex;
    font-size: 0.8rem;
    /* justify-content: center; */

    list-style: none;
    text-transform: uppercase;
    
    margin: auto 0;
    height: 100%;
    transition: 0.3s;
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

  .backdrop {
    position: fixed;
    top : 0;
    left : 0;
    width : 100vw;
    height : 100vh;
    background-color : rgba(0,0,0,0.5);
    z-index : 0;
  }
  ${media.tablet`
    padding: 0 10px;

    .burger {
      display: flex;
    }
    .nav__items {
      display: block;
      position: fixed;
      top: 50px;
      left : 0%;
      width: 0vw;
      height: 100vh;
      background-color: white;
      overflow:hidden;
      z-index: 1;
    }

    .nav__items.show_nav {
      width : 200px
    }
  `}
`;


export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-left: 0.1rem;
  cursor: pointer;
  color : ${props => props.theme.primary};

  &:hover {
    background-color : ${props => props.theme.primary};
    color : white;
  }

  ${media.tablet`
    padding : 0.7rem 1rem;
    margin : 1rem 0;
  `}
`