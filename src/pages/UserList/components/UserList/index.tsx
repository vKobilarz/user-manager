import React, { FC } from 'react';

import User from '../../../../interfaces/User';
import UserCard from '../UserCard';
import * as S from './styles';

interface UserContainerProps {
  users: User[];
}

const UserList: FC<UserContainerProps> = ({ users }) => {
  return (
    <S.Container>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </S.Container>
  );
};

export default UserList;
