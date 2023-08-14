import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  min-width: 350px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2),
    0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 6px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.children ? "green" : "red"};
`;

export const Avatar = styled.img`
width: 80px`;

export const Name = styled.p` 
font-size: 30px;
font-weight: 600;`;
