import React, { Component } from 'react'

import PortfolioWrapper from '../helpers/FlexWrapper';
import HexagonCard from '../HexagonCard/HexagonCard';

class Portfolio extends Component {
  render() {
    return (
      <PortfolioWrapper id={this.props.id}>

        <HexagonCard icon={'fa fa-2x fa-paint-brush'} title={'Beautiful'}>
          <p>I am a graphics designer first so i will ensure that all of my websites look awesome</p>
        </HexagonCard>

        <HexagonCard icon={'fa fa-2x fa-sliders-h'} title={'Interactive'}>
          <p>Websites dont have to be static, My websites are very interactive to the users.</p>
        </HexagonCard>

        <HexagonCard icon={'fa fa-2x fa-mobile-alt'} title={'Responsive'}>
          <p>My layouts looks good on all devices, desktops, tablets or mobiles.</p>
        </HexagonCard>

        <HexagonCard icon={'fa fa-2x fa-lightbulb'} title={'Creative'}>
          <p>I make websites that are very creative and unique on its own. so its looks gorgeous.</p>
        </HexagonCard>

      </PortfolioWrapper>
    )
  }
}

export default Portfolio;