import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import FakeBrowser from '../FakeBrowser';

const PanelLinks = (props) => {
  return (
    <div className="panel__icons">
      {props.links.source && (<a target="_blank" href={props.links.source}>
        <i className="fab fa-2x fa-github"></i>
      </a>)}
      {props.links.download && <a download href={props.links.download}>
        <i className="fa fa-2x fa-download"></i>
      </a>}
      {props.links.demo && <a target="_blank" href={props.links.demo}>
        <i className="fa fa-2x fa-window-maximize"></i>
      </a>}
    </div>
  )
}

class SingleJSProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid onClick={this.props.handleClick} className={'project'} direction={!this.props.rowReverse ? 'row-reverse' : 'row'} alignItems={'center'} justify={'space-between'} container>
        <Grid item xs={12} md={7}>
          <FakeBrowser hideNav={this.props.hideNav} image={this.props.image} url={this.props.links.demo} />
        </Grid>

        <Grid item xs={12} md={5} className={'project__body'}>
          <h2 className="sub-title">{this.props.title}</h2>
          <div className="project__info">
            {this.props.children}
          </div>
          <div className="project__links">
            <PanelLinks links={this.props.links} />
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default SingleJSProject;
