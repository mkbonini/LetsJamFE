import styled from 'styled-components';
// Flag Colors
// instrument: #A8DADC
// needs_instrument: lightcoral
// genre: lightgrey

// Background Colors
// Friend: #457B9D
// Profile: #FFFFFF

export const Pointer = styled.div`
  width: 150px;
  height: 40px;
  position: relative;
  background: ${props => props.flagColor};
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-right: 20px solid ${props => props.flagColor};
    border-top: 20px solid ${props => props.backgroundColor};
    border-bottom: 20px solid ${props => props.backgroundColor};
  }
  &:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-right: 20px solid ${props => props.backgroundColor};
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
`;