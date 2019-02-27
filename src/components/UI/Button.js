import styled from 'styled-components';

export default styled.a`
  display: inline-block;
  cursor: pointer;

  padding: 0.5em;
  margin: 0.2em;

  color: white;
  background-color : ${props => props.primary ? 'crimson' : 'deepskyblue'};
  border-radius: 10px;

  
  &:hover {
    background-color : ${props => props.primary ? 'orangered' : 'mediumpurple'};
  }
`