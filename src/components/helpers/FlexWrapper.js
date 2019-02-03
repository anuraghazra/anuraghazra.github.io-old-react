import styled from 'styled-components';
import media from '../helpers/media.style';

const FlexWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top : 80px;

  ${media.tablet`
    padding : 5px;
  `}
  ${props => {
      return props.boxCard && `
        border-radius : 10px;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 20px;
      `;
    }
  }
`;

export default FlexWrapper;