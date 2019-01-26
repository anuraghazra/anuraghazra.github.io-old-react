import React, { Component } from 'react';
import styled from 'styled-components';

import jsonData from './jsonData.json';

import FlexWrapper from '../helpers/FlexWrapper';
import SingleConcept from '../Projects/SingleJSProject';
import Lightbox from '../Lightbox/Lightbox';

const ConceptsWrapper = styled(FlexWrapper)`
  color: white;
  position: relative;
  height: fit-content;
  
  .project {
    margin-bottom: 100px;
  }

  .project__body {
    padding : 20px;
  }

  .project__info {
    min-height: 250px;
    margin: 0px;
    overflow: auto;
  }

  .project__links {
    margin-top: 20px;
    width: 100%;
    padding: 5px;
    height: auto;
    border: 1px solid white;
    border-radius: 10px;
  }

  .panel__icons {
    display: flex;
    justify-content: space-evenly;
    align-items : center;
  }

  .project__links a {
    flex: 1;
    margin: 0;
    color : white;
    text-align: center;
    cursor : pointer;
  }

  .project__links a:hover {
    color: #242424 !important;
  }
`


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
      console.log(e.target.src);
      this.setState({ lightbox_image: e.target.src });
      this.setState((prev) => { return { lightbox_open: !prev.lightbox_open } });
    }
  }

  handleClose = () => {
    this.setState({ lightbox_open: false });
  }
  
  // componentDidMount() {
  //   fetch('./static/jsonData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ data : data });
  //       console.log(this.state)
  //     })
  // }

  render() {
    return (
      <ConceptsWrapper id={this.props.id}>
        {
          this.state.lightbox_open &&
          <Lightbox
          handleClose={this.handleClose}
          image={this.state.lightbox_image} />
        }

        {
          jsonData.map((data, i) => {
            return (
              <SingleConcept key={i}
                handleClick={this.handleClick}
                rowReverse={i % 2}
                title={data.title}
                image={true}
                links={{
                  demo: data.links.image,
                  download: data.links.image
                }}
              >
                <p>{data.brief}</p>
              </SingleConcept>
            )
          })
        }
      </ConceptsWrapper>
    )
  }
}

export default Concepts;