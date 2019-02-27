import React from 'react'
import styled from 'styled-components';

const PageLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-image: linear-gradient(#e37682, #5f4d93);
  background-color: #e37682;
  margin: 0;

  .pre-loading__hide {
    display: none;
    z-index: -100 !important;
    pointer-events: none !important;
  }

  .pre-loading_msg {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: fit-content;
    color: white;
    font-size: 36px;
    margin: 0 auto;
  }

  .pre-loading_msg span {
    display: block;
    margin: 20px;
    font-size: 18px;
    text-align: center;
  }

  .progressbar {
    position: relative;
    width: 100%;
    height: 5px;
    background-color: #5f4d93;
  }

  .progressbar:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 5px;
    background-color: #fda3b2;
    animation: progBarAni 5s both;
  }

  @keyframes progBarAni {
    0% {
      width: 20%;
    }
    100% {
      width: 100%;
    }
  }

  .pop-balls {
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .pop-balls div {
    display: inline-block;
    width: 15px;
    margin: 5px;
    height: 15px;
    background-color: #fda3b2;
    border-radius: 50%;
    animation-name: bounce;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .pop-balls div:nth-child(odd) {
    background-color: white;
  }

  .pop-balls div:nth-child(1) {
    animation-delay: 0s;
  }

  .pop-balls div:nth-child(2) {
    animation-delay: 0.2s;
  }

  .pop-balls div:nth-child(3) {
    animation-delay: 0.4s;
  }

  .pop-balls div:nth-child(4) {
    animation-delay: 0.6s;
  }

  .pop-balls div:nth-child(5) {
    animation-delay: 0.8s;
  }

  .pop-balls div:nth-child(6) {
    animation-delay: 1s;
  }

`

function PageLoader() {
  return (
    <PageLoaderWrapper>
      <div class="pre-loading_msg">
        <div class="pop-balls">
          <div></div><div></div>
          <div></div><div></div>
          <div></div><div></div>
        </div>
        <div class="progressbar"></div>
        <span>Hmmm.. Loading...</span>
      </div>
    </PageLoaderWrapper>
  )
}

export default PageLoader;