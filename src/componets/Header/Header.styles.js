import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column; /* 수직 방향으로 정렬 */
  background-color: black;
`;

export const HeaderRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  margin: 0 10px 0 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  margin: 10px; /* 로고 상하 마진 */
  img {
    height: 2vh; /* 로고 높이 조정 */
    width: auto; /* 가로 비율 자동 조정 */
  }

  @media (max-width: 1024px) {
    img {
      height: auto; /* 로고 높이 조정 */
      width: 20vw; /* 가로 비율 자동 조정 */
    }
  }
  @media (max-width: 768px) {
    img {
      height: auto; /* 로고 높이 조정 */
      width: 20vw; /* 가로 비율 자동 조정 */
    }
  }
  @media (max-width: 425px) {
    img {
      height: auto; /* 로고 높이 조정 */
      width: 35vw; /* 가로 비율 자동 조정 */
    }
  }
`;

export const RoundBox = styled.div`
  background-color: #FFFFFF;
  border-radius: 30px;
  padding: 8px 24px;

  @media (max-width: 768px) {
    padding: 8px 5vw;

  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
`;

export const HeaderTitle = styled.h4`
  text-align: right;
  margin: 0 auto;
  color: black;

  @media (max-width: 375px) {
    font-size: 0.8em;
  }
  @media (max-width: 320px) {
    font-size: 0.6em;
  }
`;

export const HeaderBottomLine = styled.hr`
  border: none; /* 기본 border 제거 */
  height: 0.4px; /* 높이 설정 */
  background-color: grey; /* 배경색 설정 */
  width: 100%; /* 전체 너비 설정 */
  margin: auto; /* 마진 설정 */
`;


