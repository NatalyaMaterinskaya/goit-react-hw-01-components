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
  console.log(props);
  return (
    <ProfileWrapper>
      <Description>
        <Image src={avatar} alt="User avatar" class="avatar" />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <List>
        <ListItem>
          <span class="label">Followers</span>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <span class="label">Views</span>
          <Quantity>{views}</Quantity>
        </ListItem>
        <ListItem>
          <span class="label">Likes</span>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </List>
    </ProfileWrapper>
  );
};
