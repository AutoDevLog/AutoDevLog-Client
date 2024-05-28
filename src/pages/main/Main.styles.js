import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  background-color: black;
`;

export const BodyContainer = styled.div`
  padding: 20px;
  background-color: black;
`;

export const BoxContainer = styled.div`
  justify-content: space-around;
  padding: 2em;
  display: flex;
  flex-direction: row;
  padding-bottom: 3em;
  margin: 0 auto;
  margin-bottom: 3em;
  width: 80%;
  gap: 10px;
`;

export const BoxTitle3 = styled.h3`
  margin-left: 5vh;
  margin-bottom: 5px;
  font-size: 4vh;
`;

export const BoxTitle = styled.h1`
  margin-left: 5vh;
  margin-bottom: 5px;
  font-size: 4vh;
`;

export const BoxText = styled.p`
  margin-top: 5px;
`;

export const SlidingBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 60vh;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  border-radius: 10px 0 0 10px;
  z-index: 1000;
  animation: ${props => props.isOpen ? css`${slideIn} 0.3s forwards` : css`${slideOut} 0.3s forwards`};
`;

export const ButtonContainer = styled.div`
  margin-right: 5vh;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #FFFFFF;
  cursor: pointer;
  font-weight: bold;
  border: 0.3px solid #ccc;

  &:hover {
    background-color: #EDF1F5;
  }
`;

export const Input = styled.input`
  background-color: #EFEFEF;
  padding: 2vh;
  margin-bottom: 2vh;
  border-radius: 4px;
  border: 0.3px solid #ccc;
  box-sizing: border-box;
`;

export const ErrorText = styled.p`
  color: red;
  text-align: left;
`;
export const FormContainer = styled.form`
  background-color: white;
  border-radius: 30px;
  margin: 2vh 5vh;
  display: flex;
  flex-direction: column; /* 수직 정렬 */
`;

export const FormTitle = styled.h1`
  text-align: left;
`;