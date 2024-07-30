import styled from 'styled-components';

export const Container = styled.div`
`;

export const BodyContainer = styled.div`
  padding: 5vh 10vw;
  background-color: black;
  min-height: 100vh;
`;

export const BodyContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15vh 0;
`;

export const FormContainer = styled.div`
  background-color: white;
  padding: 50px;
  border-radius: 30px;
  display: flex;
  flex-direction: column; /* 수직 정렬 */
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    width: 70vw;
  }
  @media (max-width: 425px) {
    height: auto;
    width: 70vw;
  }
  @media (max-width: 375px) {
    height: auto;
    width: 60vw;
  }
`;

export const FormTitle = styled.h1`
  text-align: left;

  @media (max-width: 425px) {
    Font-size: 1.5em;
  }
  @media (max-width: 375px) {
    Font-size: 1em;
  }
`;

export const FormText = styled.p`
  text-align: left;
`;

export const Input = styled.input`
  width: 50vh;
  background-color: #EFEFEF;
  padding: 10px;
  margin: 2px 0;
  border-radius: 3px;
  border: 0.3px solid #ccc;
  box-sizing: border-box;
  outline: none; /* 포커스 시 기본 아웃라인 제거 */
  
  &:focus {
    border: 0.3px solid #aaa; /* 포커스 시 테두리 색상 변경 (선택 사항) */
    /* background-color: #ddd;  포커스 시 배경색 변경 (선택 사항) */
  }
  @media (max-width: 768px) {
    height: auto;
    width: 70vw;
  }

  @media (max-width: 425px) {
    width: 70vw;
    margin: 5px 10px;
  }


`;
export const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;

export const Button = styled.button`
  padding: 10px 50px;
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
  @media (max-width: 375px) {
    font-size: 0.5em;
  }
`;

export const FooterContainer = styled.div`
  height: 50px; /* 푸터 높이 설정 */
  background-color: white;
  text-align: center;
  padding: 10px;
  position: fixed; /* 절대 위치에서 고정 위치로 변경 */
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0; /* 여백 제거 */
`;
