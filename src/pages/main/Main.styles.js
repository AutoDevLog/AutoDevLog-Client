import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  background-color: ${colors.AliceBlue};
`;

export const BodyContainer = styled.div`
  padding: 20px;
  background-color: ${colors.Spindle};
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 3em;
  margin: 0 auto;
  margin-bottom: 3em;
  width: 80%;
  gap: 10px;
`

export const BoxTitle = styled.h3`
  margin-bottom: 5px;
`
export const BoxText = styled.p`
  margin-top: 5px;
`