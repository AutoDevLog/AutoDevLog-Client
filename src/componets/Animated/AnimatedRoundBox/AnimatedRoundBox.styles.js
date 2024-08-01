import styled from 'styled-components';
import { animated } from 'react-spring';

export const RoundBox = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;

  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
  margin-left: ${props => props.alignLeft ? '0' : 'auto'};
  margin-right: ${props => props.alignLeft ? 'auto' : '0'};


  @media (max-width: 1024px) {
    width: 50vw;
    margin-left: ${props => props.alignLeft ? '0' : 'auto'};
    margin-right: ${props => props.alignLeft ? 'auto' : '0'};
  }

  @media (max-width: 768px) {
    width: 50vw;
    margin: auto;
    margin-left: ${props => props.alignLeft ? '0' : 'auto'};
    margin-right: ${props => props.alignLeft ? 'auto' : '0'};
  }

  @media (max-width: 425px) {
    width: 50vw;
    margin:0 auto;
  }
  @media (max-width: 375px) {
    width: 45vw;
    margin: 0 auto;
  }
  @media (max-width: 320px) {
    width: 45vw;
    margin: auto 10px;
  }
`;