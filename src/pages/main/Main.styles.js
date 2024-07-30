import styled, { keyframes, css } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opactiy: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opactiy: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
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
  padding: 5px 100px;

  @media (max-width: 768px) {
    padding: 1vh 10vw;
  }

  @media (max-width: 425px) {
    padding: 0.5vh 5vw;
  }
  @media (max-width: 420px) {
    padding: 0.5vh 5vw;
}
  @media (max-width: 375px) {
    padding: 0.3vh 5vw;
  }
  @media (max-width: 320px) {
    padding: 0.2vh 5vw;
  }
`;

export const BodyTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 5em;

  @media (max-width: 1024px) {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 425px) {
    font-size: 1em;
  }
  @media (max-width: 375px) {
    font-size: 0.9em;
  }
  @media (max-width: 320px) {
    font-size: 0.7em;
  }
`;

export const BodyTitleRIGHT = styled.h1`
  animation: ${slideUp} 0.5s ease-out 0s 1;
  color: white;
  text-align: Right;
  font-size: 10em;

  @media (max-width: 1024px) {
    font-size: 8em;
  }

  @media (max-width: 768px) {
    font-size: 6em;
  }

  @media (max-width: 425px) {
    font-size: 4em;
  }
  @media (max-width: 375px) {
    font-size: 3em;
  }

`;

export const BodyTitleLEFT = styled.h1`
  animation: ${slideUp} 0.5s ease-out 0s 1;
  color: white;
  text-align: Left;
  font-size: 12em;

  @media (max-width: 1024px) {
    font-size: 8em;
  }

  @media (max-width: 768px) {
    font-size: 6em;
  }

  @media (max-width: 425px) {
    font-size: 4em;
  }
  @media (max-width: 375px) {
    font-size: 3em;
  }
`;

export const RowContainer = styled.div`
  justify-content: center;
  margin: 0 5vh;
  display: flex;
  flex-direction: row;
`

export const ColumnContainer = styled.div`
  overflow: hidden;
  justify-content: center;
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  padding: 10px 60px;

  @media (max-width: 768px) {
    padding: 3em;
  }
    
  @media (max-width: 425px) {
        padding: 2em;
  }
  @media (max-width: 375px) {
        padding: 1em;
  }
`

export const BoxContainer = styled.div`
  justify-content: space-around;
  margin-top: 5vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 5vh;

`;

export const BoxTitle3 = styled.h3`
  text-align: center;
  font-size: 8em;

  @media (max-width: 768px) {
    font-size: 15vh;
  }

  @media (max-width: 425px) {
    font-size: 10vh;
  }
  @media (max-width: 375px) {
    font-size: 8vh;
  }
  @media (max-width: 320px) {
    font-size: 6vh;
  }
`;

export const BoxTitle = styled.h1`
  font-size: 2em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 425px) {
    font-size: 1.2em;
  }
  @media (max-width: 375px) {
    font-size: 1.1em;
  }
  @media (max-width: 320px) {
    font-size: 1em;
  }
  
`;

export const BoxText = styled.p`
  margin: 0 0 1em 0;
  font-size: 1em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1em;
    text-align: center;
  }
  @media (max-width: 425px) {
    font-size: 0.6em;
    text-align: center;
  }
  @media (max-width: 375px) {
    font-size: 0.5em;
    text-align: center;
  }
`;

export const SlidingBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}
  
  @media (max-width: 768px) {
    width: 100%;
  }
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
  
  padding : 10px;
  margin: 5px 10px;
  width: 30vw;

  @media (max-width: 1024px) {
    width: 30vw;
  }
  @media (max-width: 768px) {
    width: 60vw;
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
  border-radius: 4px;
  border: 0.3px solid #ccc;
  box-sizing: border-box;

  padding : 10px;
  margin: 5px 0px;
  width: 30vw;
  height: auto;

  @media (max-width: 1024px) {
    padding : 10px;
    margin: 10px;
    width: 50vw;
    height: auto;
  }
  
  @media (max-width: 768px) {
    padding : 10px;
    margin: 10px;
    width: 60vw;
  }
`;

export const ErrorText = styled.p`
  color: red;
  text-align: left;
`;
export const FormContainer = styled.form`
  background-color: white;
  border-radius: 30px;
  /* 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 45vw;
  height: 60vh;
  display: flex;
  flex-direction: column; /* 수직 정렬 */

  @media (max-width: 768px) {
    width: 75vw;
    height: 50vh;
  }
`;

export const FormTitle = styled.h1`
  text-align: left;
`;

export const LogoContainer = styled.div`
  display: flex;
  margin: 10px 10px; /* 로고 상하 마진 */
  img {
      height: auto; /* 로고 높이 조정 */
      width: 30vw; /* 가로 비율 자동 조정 */
  }

  @media (max-width: 1024px) {
    img {
      height: auto; /* 로고 높이 조정 */
      width: 50vw; /* 가로 비율 자동 조정 */
    }
  }
  
  @media (max-width: 768px) {
    img {
      height: auto; /* 로고 높이 조정 */
      width: 60vw; /* 가로 비율 자동 조정 */
    }
  }


`;
