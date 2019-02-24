// @ts-check
import React, { useState } from 'react';

import Observer from '@researchgate/react-intersection-observer';
import LoadingPlaceholder from './LoadingPlaceholder';
import BrowserWindow from './FakeBrowser.style';

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
  const [isEntered, setEntered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleEnter = (event) => {
    if (event.isIntersecting === true) {
      setEntered(event.isIntersecting)
    }
  }

  const handleLoad = () => {
    setLoaded(true)
  }

  let component;
  if (props.image) {
    component = <Img isVisible={isEntered} url={props.url} onLoad={handleLoad} />
  } else {
    component = <IFrame isVisible={isEntered} url={props.url} onloadEvent={handleLoad} />
  }

  return (
    <BrowserWindow
      className={props.className}
      hideNav={props.hideNav}
      image={props.image}
      youtube={props.youtube}
    >
      {
        !(props.hideNav) &&
        <div className="fake-nav">
          <i></i><i></i><i></i>
        </div>
      }
      {(isEntered && (!loaded)) && <LoadingPlaceholder />}
      <Observer disabled={isEntered} onChange={handleEnter}>
        <div>
          {component}
        </div>
      </Observer>
    </BrowserWindow>
  )
}
export default FakeBrowser;