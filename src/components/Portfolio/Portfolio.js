import React from 'react'

import PortfolioWrapper from '../helpers/FlexWrapper';
import HexagonCard from '../HexagonCard/HexagonCard';

import { config } from "react-spring";
import { Trail } from "react-spring/renderprops";
import { useInView } from 'react-intersection-observer';

function Portfolio(props) {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });

  const Hexas = [
    {
      title: 'Beautiful',
      icon: 'fa fa-2x fa-paint-brush',
      info: 'I am a graphics designer first so i will ensure that all of my websites look awesome'
    },
    {
      title: 'Interactive',
      icon: 'fa fa-2x fa-sliders-h',
      info: 'Websites dont have to be static, My websites are very interactive to the users.'
    },
    {
      title: 'Responsive',
      icon: 'fa fa-2x fa-mobile-alt',
      info: 'My layouts looks good on all devices, desktops, tablets or mobiles.'
    },
    {
      title: 'Creative',
      icon: 'fa fa-2x fa-lightbulb',
      info: 'I make websites that are very creative and unique on its own. so its looks gorgeous.'
    }
  ]

  return (
    <PortfolioWrapper ref={ref} id={props.id}>

      <Trail
        config={config.gentle}
        delay={300}
        items={Hexas} keys={item => item.key}
        from={{
          opacity: 0,
          transform: 'translateY(100px)'
        }}
        to={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0px)" : "translateY(100px)"
        }}>
        {(item, index) => props =>
          <HexagonCard key={index} style={props} icon={item.icon} title={item.title}>
            <p>{item.info}</p>
          </HexagonCard>
        }
      </Trail>

    </PortfolioWrapper>
  )
}

export default Portfolio;