import styled from 'styled-components';
import { animated } from 'react-spring';

export const RoundBox = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  width: 30vh;
  border-radius: 10px;
  padding: 30px;
`;