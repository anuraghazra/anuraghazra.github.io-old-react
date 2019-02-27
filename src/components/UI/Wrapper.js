import styled from 'styled-components';
import media from '../helpers/media.style';

export default styled.div`
  position: relative;
  width : 100%;
  margin : 0 auto;
  text-align: center;
  padding : 0 20px;
  overflow-x : hidden;

  ${media.tablet`
    padding : 0px 10px;
  `}

`;