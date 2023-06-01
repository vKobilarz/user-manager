import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AddUserButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;

  img {
    margin-left: 4px;
  }
`;
