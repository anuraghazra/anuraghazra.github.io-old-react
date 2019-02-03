import React from 'react';
import HexagonWrapper from './Hexagon.style';

const Hexagon = ({icon}) => {
  return (
    <HexagonWrapper>
      <div className="hexagon">
        <i className={icon}></i>
      </div>
    </HexagonWrapper>
  )
}

export default Hexagon;