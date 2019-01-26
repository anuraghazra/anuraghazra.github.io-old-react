import styled from 'styled-components';
import media from '../helpers/media.style';

export const AvatarWrapper = styled.div`
  flex: none;
  margin: auto;
  width: 300px;
  height: 300px;
  min-width: 150px;
  min-height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid white;

  ${media.tablet`
    width : 250px;
    height : 250px;
  `}

  img {
    position: relative;
    left: 0px;
    top: -50px;
    width: 100%
  }
`;