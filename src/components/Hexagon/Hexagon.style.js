import styled from 'styled-components';

export default styled.div`
  margin: auto;
  display: block;
  text-align: initial;
  width: 200px;
  height: 200px;
  cursor: pointer;
  
  .hexagon {
    position: relative;
    width : 46%;
    height: 80%;
    margin: auto;
    color : white;
    background: linear-gradient(-180deg, white, #fda3b2);;
  }
  .hexagon i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
    font-size: 50px;
    color: #e37682;
  }
  .hexagon:before {
    position: absolute;
    content: '';
    background: inherit;
    height: 100%;
    width: 100%;
    transform: rotateZ(60deg);
  }
  .hexagon:after {
    position: absolute;
    content: '';
    top: 0;
    background: inherit;
    height: 100%;
    width: 100%;
    transform-origin: center;
    transform: rotateZ(-60deg);
  }
`;