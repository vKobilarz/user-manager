import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Input from '../../../../components/Input';
import User from '../../../../interfaces/User';

import * as S from './styles';
import { ImageContainer } from '../../../UserList/components/UserCard/styles';
import validate from '../../validation';

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

interface FieldValidation {
  isValid: boolean;
  failedValidations: String[];
}

interface UserErrors {
  name: FieldValidation;
  email: FieldValidation;
  phoneNumber: FieldValidation;
  imageUrl: FieldValidation;
}

const validationLabels = {
  required: 'Campo obrigatório',
  email: 'Campo deve seguir o formato de um e-mail.',
  user: 'Insira o nome completo.',
  phoneNumber: 'Insira um número de telefone válido. Formato: (00)00000-0000',
  url: 'Insira uma URL válida.',
};

const UserForm: FC<UserFormProps> = ({ initialValues, onSubmit }) => {
  const [form, setForm] = useState<Omit<User, 'id'>>(
    () => initialValues || emptyForm,
  );

  const [errors, setErrors] = useState<UserErrors>();

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const getErrorLabel = (validations?: String[]) => {
    // @ts-ignore
    if (!validations || validations?.length === 0) {
      return '';
    }

    // @ts-ignore
    const validation = validations[0];

    // @ts-ignore
    return validationLabels[validation];
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { validations, isValid } = validate(form);

    // @ts-ignore
    setErrors(validations);

    if (!isValid) {
      return;
    }

    onSubmit(form);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>
        <span>Nome:</span>
        <Input
          name="name"
          value={form.name}
          onChange={handleFormChange}
          required
        />
        {!errors?.name?.isValid && (
          <S.ErrorLabel>
            {getErrorLabel(errors?.name?.failedValidations)}
          </S.ErrorLabel>
        )}
      </S.Label>
      <S.Label>
        <span>E-mail:</span>
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={handleFormChange}
          required
        />
        {!errors?.email?.isValid && (
          <S.ErrorLabel>
            {getErrorLabel(errors?.email?.failedValidations)}
          </S.ErrorLabel>
        )}
      </S.Label>
      <S.Label>
        <span>Número de telefone:</span>
        <Input
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleFormChange}
          required
        />
        {!errors?.phoneNumber?.isValid && (
          <S.ErrorLabel>
            {getErrorLabel(errors?.phoneNumber?.failedValidations)}
          </S.ErrorLabel>
        )}
      </S.Label>
      <S.Label>
        <span>URL da Imagem:</span>
        <Input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleFormChange}
          required
        />
        {!errors?.imageUrl?.isValid && (
          <S.ErrorLabel>
            {getErrorLabel(errors?.imageUrl?.failedValidations)}
          </S.ErrorLabel>
        )}
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
