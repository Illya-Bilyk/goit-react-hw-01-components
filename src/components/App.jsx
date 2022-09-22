import { Profile } from './profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './friendsList/FriendsList';
import { TransactionHistory } from './transactions/Transactions';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Box } from 'components/Box';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Box display="flex" flexDirection="column" as="main" pt="10px">
        <Box mb="100px" as="section">
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Box>
        <Box mb="100px" as="section">
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
        </Box>
        <Box mb="100px" as="section">
          <FriendList friends={friends} />
        </Box>
        <Box mb="100px" as="section">
          <TransactionHistory items={transactions} />
        </Box>
      </Box>
    </div>
  );
};
