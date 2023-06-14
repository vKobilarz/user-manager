import { useEffect, useMemo, useState } from 'react';
import { getUsers } from '../../services/user';
import { useNotification } from '../../providers/Notification';

const useUsers = () => {
  const { addNotification } = useNotification();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response.data))
      .catch(() =>
        addNotification({
          message:
            'Ocorreu um erro ao buscar os usuários. Tente novamente mais tarde.',
            type: 'ERROR'
        }),
      );
  }, [addNotification]);

  return useMemo(() => ({
    users,
  }), [users]) ;
};

export default useUsers;
