import React, { FC, useState } from 'react';

import User from '../../../../interfaces/User';
import EditIcon from '../../../../assets/edit.svg';
import DeleteIcon from '../../../../assets/delete.svg';

import * as S from './styles';
import { deleteUser } from '../../../../services/user';
import { useNotification } from '../../../../providers/Notification';

const UserCard: FC<User> = ({ id, name, imageUrl, email, phoneNumber }) => {
  const { addNotification } = useNotification();

  const [isHover, setHover] = useState(false);

  const handleDeleteClick = async () => {
    try {
      await deleteUser(id);

      addNotification({
        message: 'Usuário removido com sucesso!',
        type: 'SUCCESS',
      });
    } catch (err) {
      addNotification({
        message: 'Ocorreu um erro ao remover o usuário',
        type: 'ERROR',
      });
    }
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <S.UserCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.CardTitle>
        <h4>{name}</h4>
        {isHover && (
          <S.CardActions>
            <S.EditButton to={`/user/update/${id}`}>
              <img src={EditIcon} alt="edit" width={16} />
            </S.EditButton>
            <S.DeleteButton>
              <img
                src={DeleteIcon}
                alt="delete"
                width={16}
                onClick={handleDeleteClick}
              />
            </S.DeleteButton>
          </S.CardActions>
        )}
      </S.CardTitle>
      <S.ImageContainer>
        <img src={imageUrl} alt={name} width={256} />
      </S.ImageContainer>
      <S.AttributesList>
        <li>{email}</li>
        <li>{phoneNumber}</li>
      </S.AttributesList>
    </S.UserCard>
  );
};

export default UserCard;
