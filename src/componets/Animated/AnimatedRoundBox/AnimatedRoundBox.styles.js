import styled from 'styled-components';
import { animated } from 'react-spring';

export const RoundBox = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  width: 80vh;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
  margin-left: ${props => props.alignLeft ? '0' : 'auto'};

  @media (max-width: 1024px) {
    width: 80vh;
    margin-left: ${props => props.alignLeft ? '0' : 'auto'};
    margin-right: ${props => props.alignLeft ? 'auto' : '0'};
  }

  @media (max-width: 768px) {
    width: 80vh;
    margin: auto;
    margin-left: ${props => props.alignLeft ? '0' : 'auto'};
    margin-right: ${props => props.alignLeft ? 'auto' : '0'};
  }

  @media (max-width: 425px) {
    width: 35vh;
    margin:0 auto;
  }
  @media (max-width: 375px) {
    width: 30vh;
    margin: 0 auto;
  }
  @media (max-width: 320px) {
    width: 25vh;
    margin: 0 auto;
  }
`;