import styled from 'styled-components';
import FlexWrapper from '../helpers/FlexWrapper';
import media from '../helpers/media.style';

const GenericProjectWrapper = styled(FlexWrapper)`
  color: white;
  position: relative;
  height: fit-content;

  .project {
    margin-bottom: 100px;
  }

  .project__body {
    padding: 20px;
  }

  .project__info {
    min-height: 250px;
    margin: 0px;
    overflow: auto;
  }

  .project__links {
    margin-top: 20px;
    width: 100%;
    padding: 5px;
    height: auto;
    border: 1px solid white;
    border-radius: 10px;
  }

  /* .panel__icons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  } */

  .project__links a {
    flex: 1;
    margin: 0;
    color: white;
    text-align: center;
    cursor: pointer;
  }

  .project__links a:hover {
    color: #242424 !important;
  }


  ${media.tablet`
    .project__info {
      min-height: auto;
      margin: 0px;
      overflow: auto;
    }

    .project {
      margin-bottom: 50px;
    }
  `}
`;

export default GenericProjectWrapper;