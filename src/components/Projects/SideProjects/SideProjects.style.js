import styled from 'styled-components';
import media from '../../helpers/media.style';

const SideProjectsWrapper = styled.section`
  width: 100%;
  padding: 0;
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
    /* will-change: transform, opacity; */
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

  .project__techused i {
    font-size: 24px;
    margin-right: 30px;
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

    ${media.tablet`
      margin: 1rem 0rem;
    `}
  }

  .side-projects-ul {
    list-style-type: none;
    line-height: 40px;
    padding: 0;
    margin-bottom: 50px;

    li {
      display: flex;
      align-items: center;
      font-weight: bolder;
      
      div:first-child {
        text-align: center;
        margin: 5px 20px 0px 0px;
        border-radius: 5px;
        color: ${props => props.theme.secondaryLight};
        border: 1px solid ${props => props.theme.secondaryLight};
        width: 30px;
        min-width: 30px;
        font-size: 12px;
      }
      div:nth-child(2) {
        flex-wrap: wrap;
        display: flex;
        
        div {
          height: min-content;
        }
      }
    }
  }
`;

export default SideProjectsWrapper;