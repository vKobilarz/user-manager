import PageContainer from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import useUserById from '../../hooks/useUserById';
import UserForm from './components/UserForm';
import User from '../../interfaces/User';
import { createUser, updateUser } from '../../services/user';
import { useNotification } from '../../providers/Notification';

const UserFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addNotification } = useNotification();

  const operation = id ? 'UPDATE' : 'INSERT';
  const { user } = useUserById(id);
  const handleInsertSubmit = async (form: Omit<User, 'id'>) => {
    try {
      await createUser(form);
      addNotification({
        type: 'SUCCESS',
        message: 'Usuário criado com sucesso!',
      });

      navigate('/');
    } catch (err) {
      addNotification({
        type: 'ERROR',
        message: 'Erro ao criar o usuário. Tente novamente mais tarde.',
      });
    }
  };

  const handleUpdateSubmit = async (form: Omit<User, 'id'>) => {
    try {
      await updateUser(String(id), form);
      addNotification({
        type: 'SUCCESS',
        message: 'Usuário atualizado com sucesso!',
      });

      navigate('/');
    } catch (err) {
      addNotification({
        type: 'ERROR',
        message: 'Erro ao atualizar o usuário. Tente novamente mais tarde.',
      });
    }
  };

  return (
    <PageContainer>
      <PageTitle>
        {operation === 'UPDATE'
          ? 'Atualização de usuário'
          : 'Cadastro de Usuário'}
      </PageTitle>
      {operation === 'INSERT' && <UserForm onSubmit={handleInsertSubmit} />}
      {operation === 'UPDATE' && user && (
        <UserForm onSubmit={handleUpdateSubmit} initialValues={user} />
      )}
    </PageContainer>
  );
};

export default UserFormPage;
