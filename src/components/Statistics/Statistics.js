import PropTypes from 'prop-types';

import {
  StatisticsSection,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </ListItem>
        ))}
      </List>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      })
    ).isRequired
};
