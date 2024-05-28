import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 100vh; /* 전체 화면 높이를 차지하도록 설정 */
`;

export const HeaderContainer = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  max-width: 50%;
`;

export const HeaderTitle = styled.h4`
  text-align: right;
`;

export const BodyContainer = styled.div`
  padding: 20px;
  background-color: #EDF1F5;
  height: calc(100% - 100px); /* 헤더와 푸터를 제외한 높이 계산 (예: 헤더와 푸터 각각 50px) */
`;

export const BodyContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* 부모 컨테이너의 전체 높이를 차지 */
`;



export const FormText = styled.p`
  text-align: left;
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
