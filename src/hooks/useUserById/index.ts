import { useEffect, useMemo, useState } from 'react';
import { getUserById } from '../../services/user';
import { useNotification } from '../../providers/Notification';

const useUserById = (id?: string) => {
  const { addNotification } = useNotification();

  const [user, setUser] = useState();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!id || fetched) return;

    getUserById(id)
      .then((response) => setUser(response.data))
      .catch(() =>
        addNotification({
          message:
            'Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.',
          type: 'ERROR',
        }),
      )
      .finally(() => setFetched(true));
  }, [addNotification, id, fetched]);

  return useMemo(
    () => ({
      user,
    }),
    [user],
  );
};

export default useUserById;
