import React from 'react';
import styled from 'styled-components';
import Hexagon from '../UI/Hexagon/Hexagon';

const HexagonWrapper = styled.div`
  flex: 1;
  margin: 20px;
  width: 250px;
  text-align: center;
  color: white;
  min-height: 300px;

  hr {
    border: none;
    outline: 1px solid white;
  }
  .card-title {
    font-size: 1.5rem;
  }
`;

function HexagonCard(props) {
  return (
    <HexagonWrapper style={{ ...props.style }}>
      <Hexagon icon={props.icon} />
      <p className="card-title">{props.title}</p>
      <hr />
      {props.children}
    </HexagonWrapper>
  );
}

export default HexagonCard;
