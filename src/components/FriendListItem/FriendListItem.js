import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
      <ListItem>
        <Status>{isOnline}</Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </ListItem>
    );
};
