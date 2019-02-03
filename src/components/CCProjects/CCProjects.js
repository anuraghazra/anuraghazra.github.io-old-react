import React, { Component } from 'react'
import styled from 'styled-components';
import media from '../helpers/media.style';

import FakeBrowser from '../FakeBrowser';
import { GitLinks } from '../Projects/SingleProject';

const CCWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;

  .cards__item {
    display: flex;
    padding: 1rem;
    width: 33.3333%;
  }

  .card__body {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    &:hover img {
      transform: scale(1.2);
      transition: 0.3s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    }
  }

  .card__content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: 1rem;
    justify-content : flex-end;
  }

  .card__image {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    position: relative;
    height: 300px;
    overflow: hidden;
    
    div {
      border-radius : 0;
    }
    img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 0px;
      left: 0px;
      transform: scale(1.0);
      transition: 0.3s cubic-bezier(0.43, 0.41, 0.22, 0.91);
    }

  }

  .card__title {
    color: #696969;
    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
  }


  .card__links {
    font-size : 0.8em;
    div {
      padding: 0;
      margin : 1rem 0 0;
      border: none;
    }
    a {
      display: block;
      width: 50%;
      color: #696969;
      padding: 5px;
      border-radius: 5px;
      transition: 0.2s;
      text-align: center;
      :hover {
        color: white;
        background-color: #e37682;
      }
    }
  }

  .error {
    display: block;
    width : 100%;
    height : 200px;
    color: white;
    text-align: center;
  }

  ${media.desktop`
    .cards__item {
      width: 50%;
    }
  `}
  ${media.tablet`
    .cards__item {
      width: 100%;
    }
  `}
  
`

const CC = ({ img, demo, src, title }) => {
  return (
    <li className="cards__item">
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
    </li>
  )
}

class CCProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: false
    }
  }

  componentDidMount() {
    fetch('https://anuraghazra.github.io/CanvasFun/data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data });
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <CCWrapper id={this.props.id}>
        {
          this.state.data.map((data, i) => {
            return (<CC key={i} {...data} />)
          })
        }
        {this.state.error && <h3 className='error'>Somehting Went Wrong! Please Reload the Page</h3>}
      </CCWrapper>
    )
  }
}

export default CCProjects;