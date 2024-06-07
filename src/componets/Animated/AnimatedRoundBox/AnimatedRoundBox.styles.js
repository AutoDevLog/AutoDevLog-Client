import styled from 'styled-components';
import { animated } from 'react-spring';

export const RoundBox = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  width: 30vh;
  border-radius: 10px;
  padding: 30px;

  @media (max-width: 1024px) {
    width: 30vh;
  }

  @media (max-width: 768px) {
    width: 80vh;
    margin:0 auto;
  }

  @media (max-width: 425px) {
    width: 30vh;
    margin:0 auto;
  }
  @media (max-width: 375px) {
    width: 25vh;
    margin: 0 auto;
  }
  @media (max-width: 320px) {
    width: 20vh;
    margin: 0 auto;
  }
`;