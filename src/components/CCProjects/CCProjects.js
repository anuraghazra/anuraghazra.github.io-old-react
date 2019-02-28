import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animated, config, useSpring } from "react-spring";
import FakeBrowser from '../FakeBrowser/FakeBrowser';
import { GitLinks } from '../Projects/Project';
import CCWrapper from './CCProjects.style';


const CCCard = ({ img, demo, src, title }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const slideUp = useSpring({
    config: config.gentle,
    from: {
      opacity: 0,
      transform: "translateY(100px)"
    },
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(100px)"
  });
  return (
    <animated.li style={slideUp} ref={ref} className="cards__item">
      <div className="card__body">
        <div className="card__image">
          <FakeBrowser hideNav={true} image={true} url={img} />
        </div>
        <div className="card__content">
          <div className="card__title">{title}</div>
          <div className="card__links">
            <GitLinks demo={demo} source={src} />
          </div>
        </div>
      </div>
    </animated.li>
  )
}

function CCProjects({ id }) {
  const [projects, setProjects] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch('https://anuraghazra.github.io/CanvasFun/data.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  }, [])

  return (
    <CCWrapper id={id}>
      {
        projects.map((data, i) => {
          return (<CCCard key={i} {...data} />)
        })
      }
      {isError && <h3 className='error'>Somehting Went Wrong! Please Reload the Page</h3>}
    </CCWrapper>
  )
}

export default CCProjects;