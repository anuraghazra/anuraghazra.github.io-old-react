import React from 'react'
import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';


const Loading = styled.div`
  margin : auto;

  .circle {
    position: absolute;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    margin : auto;
  }
  svg circle {
    stroke : ${props => props.theme.primary} !important;
  }
`;

const LoadingPlaceholder = () => {
  return (
    <Loading>
      <div className="circle">
        <CircularProgress size={'50px'} />
      </div>
    </Loading>

  )
}

export default LoadingPlaceholder;
