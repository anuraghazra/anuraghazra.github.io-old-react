// @ts-check
import React, { useState } from 'react';

import LoadingPlaceholder from './LoadingPlaceholder';
import BrowserWindow from './FakeBrowser.style';
import { useInView } from 'react-intersection-observer'

/**
 * @param {Object} obj
 * @param {boolean} obj.isVisible 
 * @param {string} obj.url 
 * @param {any} obj.onloadEvent 
 */
const IFrame = ({ isVisible, url, onloadEvent }) => {
  const src = url;
  return (
    <iframe onLoad={onloadEvent} title={url} width="100%" src={isVisible ? src : undefined} frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
  )
}

const FakeNav = () => {
  return (
    <div className="fake-nav">
      <i></i><i></i><i></i>
    </div>
  )
}

/**
 * @param {Object} obj
 * @param {boolean} obj.isVisible 
 * @param {string} obj.url 
 * @param {any} obj.onLoad 
 */
const Img = ({ isVisible, url, onLoad }) => {
  const [loaded, setLoaded] = useState(false);
  const [originalUrl, setOriginalUrl] = useState(null);


  const initLoad = () => {
    if (loaded) return false;
    const img = new Image();
    if (isVisible) {
      img.src = url;
    }
    img.onload = () => {
      setLoaded(true);
      setOriginalUrl(img.src);
      onLoad();
    }
  }

  initLoad();

  return (
    <>
      {
        loaded &&
        <img
          alt={url}
          width="100%"
          height="100%"
          src={originalUrl}
        />
      }
    </>
  )
}

function FakeBrowser(props) {
  // const [isEntered, setEntered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });


  // const handleEnter = (event) => {
  //   if (event.isIntersecting === true) {
  //     setEntered(event.isIntersecting)
  //   }
  // }

  const handleLoad = () => {
    setLoaded(true);
  }

  let component;
  if (props.image) {
    component = <Img isVisible={inView} url={props.url} onLoad={handleLoad} />
  } else {
    component = <IFrame isVisible={inView} url={props.url} onloadEvent={handleLoad} />
  }

  return (
    <BrowserWindow
      className={props.className}
      hideNav={props.hideNav}
      image={props.image}
      youtube={props.youtube}
    >
      {!props.hideNav && <FakeNav />}
      {(inView && (!loaded)) && <LoadingPlaceholder />}

      <div ref={ref}>
        {component}
      </div>
    </BrowserWindow>
  )
}
export default FakeBrowser;