import React from 'react'
import { AvatarWrapper } from './Avatar.style';
// import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';

const Avatar = (props) => {
  return (
    <AvatarWrapper>
      <img src={props.img} alt="anurag hazra" />
    </AvatarWrapper>
  )
}

export default Avatar;