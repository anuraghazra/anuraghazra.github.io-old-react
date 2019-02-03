import React, { Component } from 'react';
import styled from 'styled-components';
import Hexagon from '../Hexagon/Hexagon';

import Zoom from 'react-reveal/Zoom';
import withReveal from 'react-reveal/withReveal';

const HexagonCardWrapper = withReveal(styled.div``, <Zoom />);

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
    font-size: 30px;
  }
`;

class HexagonCard extends Component {
  render() {
    return (
      <HexagonWrapper>
        <HexagonCardWrapper>
          <Hexagon icon={this.props.icon} />
          <p className="card-title">{this.props.title}</p>
          <hr />
          {this.props.children}
        </HexagonCardWrapper>
      </HexagonWrapper>
    );
  }
}

export default HexagonCard;
