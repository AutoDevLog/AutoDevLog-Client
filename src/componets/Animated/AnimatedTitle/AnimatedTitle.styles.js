import styled from 'styled-components';
import { animated } from 'react-spring';

export const AnimatedTitle = styled(animated.h1)`
    text-align: center;
    font-size: 10em;
    color: white;
    padding: 10px 0px;
    margin:0;

    @media (max-width: 1024px) {
        font-size: 8em;
    }

    @media (max-width: 768px) {
        font-size: 5em;
        padding: 0px 0px;
        margin:0;
      }
    
    @media (max-width: 425px) {
        font-size: 6vh;
        padding: 0px 0px;
        margin:0;
    }
    @media (max-width: 375px) {
        font-size: 5vh;
        padding: 0px 0px;
        margin:0;
    }
    @media (max-width: 320px) {
        font-size: 5vh;
        padding: 0px 0px;
        margin:0;
    }
`;
