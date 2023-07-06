import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 8px;

  > span {
    margin-bottom: 4px;
  }
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background-color: ${({theme}) => theme.colors.success};
  color: #fafafa;
  cursor: pointer;

  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  border: none;
`;

export const ErrorLabel = styled.div`
  margin-left: 8px;
  margin-top: 4px;
  color: ${({theme}) => theme.colors.error};
`;