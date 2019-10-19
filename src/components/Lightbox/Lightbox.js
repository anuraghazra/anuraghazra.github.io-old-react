import React, { Component } from 'react';

import interact from 'interactjs';
import LightboxWrapper from './Lightbox.style';

class Lightbox extends Component {
  constructor(props) {
    super(props);
    this.overlay = React.createRef();
    this.overlayImg = React.createRef();
    this.gestureArea = React.createRef();

    this.state = {
      isOpen: false
    };
  }

  preventScrolling = e => {
    e.preventDefault();
  };

  componentDidMount() {
    this.overlay.current.addEventListener('mousewheel', this.preventScrolling);
    this.overlay.current.addEventListener('touchmove', this.preventScrolling);

    let scale = 1;
    const gestureArea = this.gestureArea.current;
    const scaleElement = this.overlayImg.current;

    let zoomScale = 1;
    gestureArea.addEventListener('mousewheel', (e) => {
      e.preventDefault();
      if (e.wheelDeltaY > 0) {
        zoomScale += 0.1;
      } else if (e.wheelDeltaY < 0) {
        zoomScale -= 0.1;
      }
      if (zoomScale < 0.05) {
        zoomScale = 0.05;
      }
      scaleElement.style.transform = `scale(${zoomScale})`;
    });

    interact(gestureArea)
      .gesturable({
        onmove: function (event) {
          scale = scale * (1 + event.ds);
          scaleElement.style.transform = 'scale(' + scale + ')';
          dragMoveListener(event);
        }
      })
      .draggable({
        onmove: dragMoveListener,
        inertia: true
      });
    function dragMoveListener(event) {
      const { target } = event;
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      target.style.transform = `translate(${x}px, ${y}px)`;
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
  }

  componentWillUnmount() {
    this.overlay.current.removeEventListener('mousewheel', this.preventScrolling);
    this.overlay.current.removeEventListener('touchmove', this.preventScrolling);
  }

  render() {
    return (
      <LightboxWrapper position={this.state.position} ref={this.overlay}>
        <div className='lightbox'>
          <div className='gestureArea' ref={this.gestureArea}>
            <img ref={this.overlayImg} src={this.props.image} alt='' />
          </div>
          <p onClick={this.props.handleClose} className='close'>
            <i className='fas fa-2x fa-times-circle' />
          </p>
        </div>
      </LightboxWrapper>
    );
  }
}

export default Lightbox;
