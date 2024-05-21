import styled from 'styled-components';
import { animated } from 'react-spring';

const inputStyles = `
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 0.3px solid #ccc;
  border-radius: 5px;
  background-color: #EDF1F5;
  font-size: 1em;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  margin-top: 1em;
  margin-botom: 3px;
`;

export const ModalTitle2 = styled.h3`
  margin-top: 1em;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 20px;
  border: 0.3px solid #ccc;
  border-radius: 5px;
  background-color: #EDF1F5;
  font-size: 1em;
`;

export const AnimatedInput = styled(animated.input)`
  ${inputStyles}
`;


export const ModalText = styled.p`
  margin: 0 auto;
  color: ${props => (props.match ? 'green' : 'red')};
`;

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: row;
`

export const CheckButton = styled.button`
  width: 8em;
  padding: 5px;
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  border: 0.3px solid #ccc;
  &:hover {
    background-color: #EDF1F5;
  }
`;