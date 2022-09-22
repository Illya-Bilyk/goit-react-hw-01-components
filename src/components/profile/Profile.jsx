import {
  ProfileWrap,
  Description,
  Avatar,
  Name,
  UserInfo,
  StatsList,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>
      <StatsList>
        <Stats>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Stats>
        <Stats>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Stats>
        <Stats>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Stats>
      </StatsList>
    </ProfileWrap>
  );
};
