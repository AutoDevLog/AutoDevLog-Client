import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  padding-bottom: 10px;
  margin: 0 auto;
  background-color: black;
  min-height: 100vh;
  justify-content: center; /* 가로로 중앙 정렬 */
  align-items: center; /* 세로로 중앙 정렬 */
`;


export const ResultText = styled.h3`
white-space: pre-line;
`;

export const FormContainer = styled.div`
  margin: 5vh 10vh;

  @media (max-width: 425px) {
    margin: 5vh 5vh;
  }
`;

export const FormRowContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const FormColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3vh;
  width: 100vh;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0;
  }
`;


export const FormTitle = styled.h3`
  text-align: left;
  margin: 2vh 0;
  color: white;

  @media (max-width: 320px) {
    font-size: 2vh;
    margin: 1vh 0;
  }
`;

export const FormText = styled.p`
  text-align: left;
  margin: 0vh 0;
  color: white;

  @media (max-width: 320px) {
    font-size: 1.5vh;
  }
`;

export const ModalTitle = styled.h1`
  text-align: left;
  margin: 2vh 0;
  color: white;
`
export const ModalText = styled.p`
  text-align: left;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #EFEFEF;
  padding: 10px;
  border-radius: 15px;
  border: 0.3px solid #ccc;
  box-sizing: border-box;
  outline: none; /* 포커스 시 기본 아웃라인 제거 */
  
  &:focus {
    border: 0.3px solid #aaa; /* 포커스 시 테두리 색상 변경 (선택 사항) */
    /* background-color: #ddd;  포커스 시 배경색 변경 (선택 사항) */
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  @media (max-width: 375px) {
    justify-content: center;
  }
`;

export const GenerateButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: bold;
  border: 0.3px solid #ccc;

  &:hover {
    background-color: #EDF1F5;
  }

  @media (max-width: 768px) {
    padding: 10px 40px;
  }

  @media (max-width: 375px) {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 10px 100px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: bold;
  border: 0.3px solid #ccc;

  &:hover {
    background-color: #EDF1F5;
  }

  @media (max-width: 768px) {
    padding: 10px 40px;
  }

  @media (max-width: 375px) {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 10px auto;
  }
  @media (max-width: 320px) {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 10px 20px;
  }
`;

export const WarningText = styled.p`
  text-align: left;
  color: red;
  margin-top: -5px;

  @media (max-width: 320px) {
    font-size: 1.5vh;
  }
`;

export const ResultBox = styled.div`
  overflow: scroll;
  background-color: #EFEFEF; /* 배경색 */
  padding: 20px; /* 패딩 */
  border-radius: 10px; /* 둥근 모서리 */
  text-align: left; /* 텍스트 중앙 정렬 */
  height: 50vh;
  box-sizing: border-box; /* 수평 중앙 정렬 */
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
