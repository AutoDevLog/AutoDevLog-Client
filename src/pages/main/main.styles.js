import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  background-color: #fffff;
  margin: 0 auto;
  max-width: 50%;
`;

export const HeaderTitle = styled.p`
  text-align: right;
`;

export const BodyContainer = styled.div`
  padding: 20px;
  background-color: #EDF1F5;
`;

export const BodyContentContainer = styled.div`
  margin: 0 auto;
  max-width: 50%;
`;

export const BodyTitle = styled.h2`
  text-align: left;
`;

export const BodyText = styled.p`
`;

export const FormContainer = styled.div`
  padding: 20px;
  max-width: 50%;
  margin: 0 auto;
  margin-top: 20px;
`;

export const FormTitle = styled.h3`
  text-align: left;
`;

export const FormText = styled.p`
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #EDF1F5;
  padding: 10px;
  margin: 2px 0;
  border-radius: 4px;
  border: 0.3px solid #ccc;
  box-sizing: border-box; /* 입력 필드의 최대 너비 (선택 사항) */
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
  background-color: #EDF1F5; /* 배경색 */
  padding: 20px; /* 패딩 */
  border-radius: 10px; /* 둥근 모서리 */
  margin-top: 10px; /* 상단 여백 */
  text-align: left; /* 텍스트 중앙 정렬 */
  max-width: 100%; /* 최대 너비 */
  box-sizing: border-box; /* 수평 중앙 정렬 */
`;
