import { List, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status isOnline={friend.isOnline}></Status>
          <Avatar src={friend.avatar} alt={friend.name} width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </List>
  );
};
