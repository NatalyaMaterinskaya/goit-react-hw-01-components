import styled from 'styled-components';
import data from 'data/data.json';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  border: 1px solid #ccbaba;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Title = styled.h2`
  margin: 0 auto;
  padding: 36px;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;

`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
  width: calc(100% / ${data.length});
  text-align: center;
  color: #ffffff;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 20px;
`;

export const Percentage = styled.span`
  font-size: 24px;
`;
