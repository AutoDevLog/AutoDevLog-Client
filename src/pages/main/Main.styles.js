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
  min-height: 100vh;
`;

export const BodyContainer = styled.div`
  background-color: black;
`;

export const RowContainer = styled.div`
  justify-content: center;
  margin: 0 5vh;
  display: flex;
  flex-direction: row;
`

export const ColumnContainer = styled.div`
  justify-content: center;
  margin: 0 5vh;
  display: flex;
  flex-direction: column;
  padding: 10vh;
`

export const BoxContainer = styled.div`
  justify-content: space-around;
  padding: 10vh;
  display: flex;
  flex-direction: row;
  
  gap: 10px;
`;

export const BoxTitle3 = styled.h3`
  text-align: center;
  font-size: 4vh;
`;

export const BoxTitle = styled.h1`
  font-size: 4vh;
  text-align: center;
`;

export const BoxText = styled.p`
  margin: 0 0 5vh 0;
  font-size: 2vh;
  text-align: left;
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
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: bold;
  border: 0.3px solid #ccc;

  &:hover {
    background-color: #EDF1F5;
    color: black;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  font-size: 1em;
  cursor: pointer;
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
  margin: 20vh 5vh;
  display: flex;
  flex-direction: column; /* 수직 정렬 */
`;

export const FormTitle = styled.h1`
  text-align: left;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2vh; /* 로고 상하 마진 */
  img {
    height: 8vh; /* 로고 높이 조정 */
    width: auto; /* 가로 비율 자동 조정 */
  }
`;