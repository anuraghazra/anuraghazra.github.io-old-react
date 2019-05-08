import React, { Component } from 'react';
import Lightbox from '../Lightbox/Lightbox';
import GenericProject from '../Projects/GenericProject';
import jsonData from './jsonData.json';

class Concepts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightbox_image: null,
      lightbox_open: false,
    }
  }

  handleClick = (e) => {
    if (e.target.tagName === 'IMG') {
      this.setState({ lightbox_image: e.target.src });
      this.setState((prev) => { return { lightbox_open: !prev.lightbox_open } });
    }
  }

  handleClose = () => {
    this.setState({ lightbox_open: false });
  }

  render() {
    return (
      <div id={this.props.id}>
        {
          this.state.lightbox_open &&
          <Lightbox
            handleClose={this.handleClose}
            image={this.state.lightbox_image}
          />
        }

        {
          jsonData.map((data, i) => {
            let sharelink = data.links.dribbble ? 
            "http://www.facebook.com/sharer.php?u=" + data.links.dribbble :
            "http://www.facebook.com/sharer.php?u=https://anuraghazra.github.io/" + data.links.image
            return (
              <GenericProject key={i}
                handleClick={this.handleClick}
                rowReverse={(i % 2) ? false : true}
                title={data.title}
                image={data.links.image}
                links={{
                  demo: data.links.demo,
                  dribbble: data.links.dribbble,
                  share: sharelink
                }}
              >
                <p>{data.brief}</p>
              </GenericProject>
            )
          })
        }
      </div>
    )
  }
}

export default Concepts;