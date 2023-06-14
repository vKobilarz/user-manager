import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Input from '../../../../components/Input';
import User from '../../../../interfaces/User';

import * as S from './styles';
import { ImageContainer } from '../../../UserList/components/UserCard/styles';

const emptyForm = {
  name: '',
  email: '',
  imageUrl: '',
  phoneNumber: '',
};

interface UserFormProps {
  initialValues?: Omit<User, 'id'>;
  onSubmit(form: Omit<User, 'id'>): void;
}

const UserForm: FC<UserFormProps> = ({ initialValues, onSubmit }) => {
  const [form, setForm] = useState<Omit<User, 'id'>>(
    () => initialValues || emptyForm,
  );

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(form);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>
        <span>Nome:</span>
        <Input name="name" value={form.name} onChange={handleFormChange} />
      </S.Label>
      <S.Label>
        <span>E-mail:</span>
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={handleFormChange}
        />
      </S.Label>
      <S.Label>
        <span>Número de telefone:</span>
        <Input
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleFormChange}
        />
      </S.Label>
      <S.Label>
        <span>URL da Imagem:</span>
        <Input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleFormChange}
        />
      </S.Label>
      <S.Label>
        <span>Visualização da Imagem:</span>
        <ImageContainer>
          <img src={form.imageUrl} alt="" width={256} />
        </ImageContainer>
      </S.Label>
      <S.Actions>
        <S.Button>Confirmar</S.Button>
      </S.Actions>
    </S.Form>
  );
};

export default UserForm;
