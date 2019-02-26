import React from 'react';
import styled from 'styled-components';

import Hexagon from '../Hexagon/Hexagon';
import FakeBrowser from '../FakeBrowser/FakeBrowser';

const ContactWrapper = styled.section`
  width: 100%;
  height : auto;
  padding : 5px;
  margin-bottom: 10rem;

  .location-map {
    min-height: 600px;
  }
  .social-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 5rem;
    text-align: center;

    a {
      color : white;
    }

    .hexagon {
      border-radius: 0;
      transition: 0.5s;
      :before,
      :after {
        border-radius: 0;
        transition: 0.5s;
      }
    }
    .hexagon i {
      transform: scale(1);
      transition: 0.2s;
    }
    .hexagon:hover i {
      transform: scale(1.2);
      transition: 0.2s;
    }
    .hexagon:hover {
      border-radius: 50px;
      transition: 0.5s;
    }
    .hexagon:hover {
      :before,
      :after {
        border-radius: 50px;
        transition: 0.5s;
      }
    }
      

  }
`

function Contact(props) {
  return (
    <ContactWrapper id={props.id}>
      <div className="social-links">
        <a href="mailto:hazru.anurag@gmail.com"><Hexagon icon={'fa fa-2x fa-at'} />hazru.anurag@gmail.com</a>
        <a href="https://twitter.com/anuraghazru"><Hexagon icon={'fab fa-2x fa-twitter'} />#anuraghazru</a>
        <a href="https://facebook.com/anuragh4zra"><Hexagon icon={'fab fa-2x fa-facebook'} />/anuragh4zra</a>
        <a href="https://instagram.com/anuraghazru"><Hexagon icon={'fab fa-2x fa-instagram'} />/anuraghazru</a>
      </div>

      <h2 className="sub-title page-title">Find Me</h2>

      <FakeBrowser className="location-map" hideNav url={'map.html'} />
    </ContactWrapper>
  )
}

export default Contact;
