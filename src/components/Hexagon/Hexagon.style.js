import styled from 'styled-components';

export default styled.div`
  margin: auto;
  display: flex;
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
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .hexagon i {
    z-index: 1;
    margin : auto;
    font-size: 50px;
    color : transparent;
    background : ${props => props.theme.grad};
    background-clip: text;
    -webkit-background-clip: text;
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