import {
  ProfileWrapper,
  Description,
  Image,
  Name,
  Text,
  List,
  ListItem,
  Quantity
} from './Profile.styled';

export const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <ProfileWrapper>
      <Description>
        <Image src={avatar} alt="User avatar"/>
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <List>
        <ListItem>
          <span>Followers</span>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <span>Views</span>
          <Quantity>{views}</Quantity>
        </ListItem>
        <ListItem>
          <span>Likes</span>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </List>
    </ProfileWrapper>
  );
};
