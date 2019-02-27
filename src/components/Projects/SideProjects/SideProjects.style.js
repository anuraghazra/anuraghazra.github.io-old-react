import styled from 'styled-components';
import media from '../../helpers/media.style';

const SideProjectsWrapper = styled.section`
  padding: 0rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  text-align: left;

  .title-grad {
    margin: 1rem;
    font-size: 2rem;
    ${media.mobile`
      margin: 0rem;
      margin-top: 1rem;
    `}
  }
  .single__project {
    width: 100%;
    border-radius: 5px;
    margin-top: 3rem;
    padding: 1rem;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    border-radius: 15px;
    /* border: 1px solid ${props => props.theme.secondaryLight}; */

    ${media.tablet`
      padding: 5px;
      margin-bottom : 5rem;
    `}
  }

  .project__info {
    min-height: 250px;
    margin: 1rem;
    font-size: 1em;
    overflow: hidden;

    p {
      display: block;
      min-height: 100px;
      color: #252525;
    }
  }

  .side-projects-ul {
    list-style-type: none;
    line-height: 40px;
    padding: 0;

    li {
      font-weight: bolder;
      background: ${props => props.theme.gradDark};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export default SideProjectsWrapper;