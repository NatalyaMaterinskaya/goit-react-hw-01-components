import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  min-width: 800px;
  text-align: center;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  color: #ffffff;
  font-weight: 600;
  background-color: #48cedf;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  color: #6d6565;
  text-transform: capitalize;
`;

export const TableRow = styled.tr`
  font-size: 16px;

  &:nth-child(even) {
    background-color: #b0adad5c;
  }
`;

export const TableData = styled.td`
  padding: 16px 24px;
  border: 1px solid #c2bcbc;
`;
