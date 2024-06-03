import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, sans-serif;
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

`;

export const FormRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const FormColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3vh;
  width: 100vh;
`

export const FormTitle = styled.h3`
  text-align: left;
  margin: 2vh 0;
  color: white;
`;

export const FormText = styled.p`
  text-align: left;
  margin: 0vh 0;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #EFEFEF;
  padding: 10px;
  margin: 2px 0;
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
  margin-top: 20px;
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
  margin-left: 10px;

  &:hover {
    background-color: #EDF1F5;
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
