import styled from 'styled-components';
import media from '../../helpers/media.style';

const SideProjectsWrapper = styled.section`
  padding: 0rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  text-align: left;

  .title-grad {
    margin: 1rem;
  }
  .single__project {
    border-radius: 5px;
    margin-top: 3rem;
    padding: 1rem;
    /* border: 1px solid ${props => props.theme.secondaryLight}; */
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    border-radius: 15px;

    ${media.tablet`
      padding: 5px;
      margin-bottom : 5rem;
    `}
  }

  .small__projects {
    border: none;
    padding: 0;
    margin-bottom: 0;

    > div {
      margin: 0.5rem;
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid ${props => props.theme.secondaryLight};

      ${media.tablet`
        margin: 0;
        margin-bottom : 5rem;
        padding: 5px;
        :nth-last-child(1) {
          margin-bottom : 0px !important;
        }
      `}
    }
  }

  .project__info p {
    display: block;
    min-height: 100px;
    color: #252525;
  }
  .project__info {
    min-height: 250px;
    margin: 1rem;
    font-size: 1em;
    overflow: hidden;
  }
  .side-projects-ul {
    list-style-type: none;
    line-height: 40px;
    padding: 0;
  }

  .side-projects-ul li {
    font-weight: bolder;
    background: ${props => props.theme.gradDark};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default SideProjectsWrapper;