import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserCard = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  width: 256px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 32px;

  > h4 {
    font-size: 20px;
    margin-block: 0;
    margin-inline: 0px;
    ${({ theme }) => theme.textOverflow}
  }
`;

export const CardActions = styled.div`
  display: flex;
  margin-left: 4px;
`;

export const EditButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.warning};
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.error};
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  margin-left: 4px;
`;

export const ImageContainer = styled.div`
  height: 256px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const AttributesList = styled.ul`
  list-style: none;
  margin-block: 0px;
  margin-inline: 0px;
  padding-inline: 0px;

  margin: 16px;

  li {
    ${({ theme }) => theme.textOverflow}
    line-height: 24px;
    font-size: 16px;
  }
`;
