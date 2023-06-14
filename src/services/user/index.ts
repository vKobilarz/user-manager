import axios from 'axios';
import User from '../../interfaces/User';

const userClient = axios.create({ baseURL: 'http://localhost:8080/user' });

export const getUsers = () => {
  return userClient.get('');
};

export const getUserById = (id: string) => {
  return userClient.get(id);
};

export const createUser = (user: Omit<User, 'id'>) => {
  return userClient.post('', user);
};

export const updateUser = (id: string, user: Omit<User, 'id'>) => {
  return userClient.put(id, user);
};

export const deleteUser = (id: number) => {
  return userClient.delete(String(id));
};
