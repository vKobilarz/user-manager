import styled, { css } from 'styled-components';

interface NotificationContainerProps {
  type?: 'ERROR' | 'WARNING' | 'INFO' | 'SUCCESS';
}

export const NotificationContainer = styled.div<NotificationContainerProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 16px;

  padding: 16px;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    margin-left: 8px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ theme, type }) =>
    type === 'INFO' &&
    css`
      background-color: ${theme.colors.info};
    `}
  ${({ theme, type }) =>
    type === 'WARNING' &&
    css`
      background-color: ${theme.colors.warning};
    `}
  ${({ theme, type }) =>
    type === 'ERROR' &&
    css`
      background-color: ${theme.colors.error};
    `}

  ${({ theme, type }) =>
    (type || 'SUCCESS') === 'SUCCESS' &&
    css`
      background-color: ${theme.colors.success};
    `}
`;
