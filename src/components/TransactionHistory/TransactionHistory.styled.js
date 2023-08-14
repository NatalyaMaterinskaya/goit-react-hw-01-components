import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 80%;
  border: 1px solid black;
  gap: 16px;
  /* min-width: 500px;
  border: 1px solid #ccbaba;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px; */
`;

export const TableHead = styled.thead`

`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: calc((100% - 2 * 24px) / 3);
`;

export const TableRow = styled.tr`
  display: flex;
  gap: 24px;
 
`;
export const TableData = styled.td`
  display: flex;
  flex-direction: column;
  padding: 20px 44px;
`;