import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import user from '../data/user.json'
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '16px',
        alignItems: 'center',
        margin: '20px auto',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <GlobalStyle />
    </div>
  );
};
