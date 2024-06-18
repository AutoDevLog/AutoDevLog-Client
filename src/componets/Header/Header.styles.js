import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column; /* 수직 방향으로 정렬 */
  background-color: black;
  width: 100%;
`;

export const HeaderRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  margin: 0 20px 0 20px;
  max-width: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  margin: 10px; /* 로고 상하 마진 */
  margin-bottom: 10px-4px;
  img {
    height: 20px; /* 로고 높이 조정 */
    width: auto; /* 가로 비율 자동 조정 */
  }
`;

export const RoundBox = styled.div`
  background-color: #FFFFFF;
  border-radius: 30px;
  padding: 8px 24px;

  @media (max-width: 425px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
`;

export const HeaderTitle = styled.h4`
  text-align: right;
  margin: 0 auto;
  color: black;
`;

export const HeaderBottomLine = styled.hr`
  border: none; /* 기본 border 제거 */
  height: 0.3px; /* 높이 설정 */
  background-color: grey; /* 배경색 설정 */
  width: 100%; /* 전체 너비 설정 */
  margin: 0; /* 마진 설정 */
`;


