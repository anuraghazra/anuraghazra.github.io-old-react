import React from 'react';
// import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import styled from 'styled-components';
import media from '../helpers/media.style';

const AvatarWrapper = styled.div`
  margin: auto;
  width: 300px;
  height: 300px;
  min-width: 150px;
  min-height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid white;

  ${media.tablet`
    width : 250px;
    height : 250px;
  `}

  img {
    position: relative;
    left: 0px;
    top: -50px;
    width: 100%
  }
`;


const Avatar = props => {
  return (
    <AvatarWrapper style={props.style} className={props.className}>
      <img src={props.img} alt='anurag hazra' />
    </AvatarWrapper>
  );
};

export default Avatar;
