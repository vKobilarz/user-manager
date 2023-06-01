import React from 'react';

import AddIcon from '../../assets/add.svg';

import PageContainer from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';
import useUsers from '../../hooks/useUsers';
import UserList from './components/UserList';
import * as S from './styles';

const UserListPage = () => {
  const { users } = useUsers();

  return (
    <PageContainer>
      <PageTitle
        actions={
          <S.AddUserButton to={'/user/create'}>
            Cadastrar Usuário
            <img src={AddIcon} alt="add-user" width={16} />
          </S.AddUserButton>
        }
      >
        Seus usuários
      </PageTitle>
      <UserList users={users} />
    </PageContainer>
  );
};

export default UserListPage;
