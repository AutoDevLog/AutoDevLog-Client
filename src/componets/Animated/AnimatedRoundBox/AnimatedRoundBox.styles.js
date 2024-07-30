import styled from 'styled-components';
import { animated } from 'react-spring';

export const RoundBox = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  width: 100em;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
  margin-left: ${props => props.alignLeft ? '0' : 'auto'};

  @media (max-width: 2560px) {
    width: 120em;
  }

  @media (max-width: 1440px) {
    width: 50em;
  }

  @media (max-width: 1024px) {
    width: 25em;
    margin-left: ${props => props.alignLeft ? '0' : 'auto'};
    margin-right: ${props => props.alignLeft ? 'auto' : '0'};
  }

  @media (max-width: 768px) {
    width: 20em;
    margin: auto;
    margin-left: ${props => props.alignLeft ? '0' : 'auto'};
    margin-right: ${props => props.alignLeft ? 'auto' : '0'};
  }

  @media (max-width: 425px) {
    width: 15em;
    margin:0 auto;
  }
  @media (max-width: 375px) {
    width: 13em;
    margin: 0 auto;
  }
  @media (max-width: 320px) {
    width: 10em;
    margin: 0 10px;
  }
`;