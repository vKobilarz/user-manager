import axios from 'axios';

const userClient = axios.create({ baseURL: 'http://localhost:3030/users' });

export const deleteUser = (id: string) => {
  return userClient.delete(id);
};
