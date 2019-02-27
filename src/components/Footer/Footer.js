import React from 'react';
import styled from 'styled-components';
import media from '../helpers/media.style';

const FooterWrapper = styled.footer`
  color : ${props => props.theme.primary};
  border-radius: 0;
  font-size: 1em;
  width : 100%;
  height : auto;
  padding: 10px 10px;
  background-color : white;
  display: flex;
  align-items: center;
  
  p {
    margin: 0;
    padding: 0;
  }

  div {
    text-align: left;
    width : 100%;    
  }

  .madewith {
    text-align: right;
  }

  ${media.tablet`
    font-size: 0.8em;
  `}
`

function Footer() {
  return (
    <FooterWrapper>
      <div>
        <p>Thanks! For Visiting. Lets have some tea together some day</p>
      </div>
      <div className="madewith">
        Made With <i className="fa fa-fa2x fa-heart"></i> And <i className="fab fa-fa2x fa-react"></i> | Designed By Me
      </div>
    </FooterWrapper>
  )
}

export default Footer;
