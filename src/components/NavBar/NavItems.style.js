import styled from 'styled-components';
import Link from 'react-scroll/modules/components/Link';
import media from '../helpers/media.style';

const NavLink = styled(Link)`
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
`;

const NavItemsWrapper = styled.div`
  display: flex;
  font-size: 0.75rem;
  /* justify-content: center; */
  list-style: none;
  text-transform: uppercase;
  margin: auto 0;
  height: 100%;
  transition: 0.3s;
  
  > a {
    transition: 0.3s;
  }

  ${media.tablet`
    & {
      display: block;
      position: fixed;
      top: 45px;
      left : 0%;
      width: 0vw;
      height: 100vh;
      background-color: white;
      overflow: hidden;
    }

    & {
      width: ${props => props.sidebarState ? '200px' : '0px'};
    }
  `}
`

export { NavItemsWrapper, NavLink };