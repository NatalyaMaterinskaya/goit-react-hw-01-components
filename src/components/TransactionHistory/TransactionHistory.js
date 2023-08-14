import PropTypes from 'prop-types';

import {
  TransactionHistoryTable,
  TableRow,
  TableData,
  TableHead,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TableHead>
        <TableRow>
          <TableData>Type</TableData>
          <TableData>Amount</TableData>
          <TableData>Currency</TableData>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string)
  ).isRequired,
};