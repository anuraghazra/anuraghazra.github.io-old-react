import React from 'react'
import styled from 'styled-components';

const Loading = styled.div`
  margin : auto;
  .circle {
    border-radius: 50%;
    border: 5px solid transparent;
    border-top: 5px solid ${props => props.theme.primary};
    width: 70px;
    height: 70px;
    /* cubic-bezier(0.785, 0.135, 0.15, 0.86) */
    animation: spin 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% { 
      transform: rotate(360deg);
    }
  }
`;

const LoadingPlaceholder = () => {
  return (
    <Loading>
      <div className="circle"></div>
    </Loading>
  )
}

export default LoadingPlaceholder;
