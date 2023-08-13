import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  min-height: 450px;
  font-size: 18px;
  background-color: #ffffff;
  border: 1px solid #cac4c4;
  border-radius: 4px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  padding: 36px;
  font-weight: 600;
`;
export const Image = styled.img`
  width: 150px;
  margin-bottom: 16px;
`;

export const Name = styled.p`
  font-size: 24px;
`;

export const Text = styled.p`
  margin-top: 8px;
  text-align: center;
  color: #949494;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: rgba(142 146 218 / 10%);
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 32px 0;
  text-align: center;
  width: calc(100% / 3);
  color: #949494;
  font-weight: 600;
  border-top: 1px solid #cac4c4;
  border-right: 1px solid #cac4c4;

  &:last-child {
    border-right: none;
  }
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;
