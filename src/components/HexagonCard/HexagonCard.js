import React from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon/Hexagon';


const HexagonCardWrapper = styled.div`
  flex: 1;
  margin: 20px;
  width: 250px;
  text-align: center;
  color : white;
  min-height: 300px; 

  hr {
    border: none;
    outline : 1px solid white;
  }
  .card-title {
    font-size: 30px;
  }
`;

const HexagonCard = ({ icon, title, children }) => {
  return (
    <HexagonCardWrapper>
      <div>
        <Hexagon icon={icon} />
        <p className="card-title">{title}</p>
        <hr />
        {children}
      </div>
    </HexagonCardWrapper>
  )
}

export default HexagonCard;
