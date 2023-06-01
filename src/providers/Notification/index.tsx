import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useContext,
} from 'react';

import DeleteIcon from '../../assets/delete.svg';

import * as S from './styles';

interface NotificationContextProps {
  addNotification(message: Message): void;
}

const NotificationContext = createContext<NotificationContextProps>(
  {} as NotificationContextProps,
);

interface NotificationProviderProps {
  children: ReactNode;
}

interface Notification {
  id: string;
  message: string;
  type: 'ERROR' | 'INFO' | 'WARNING' | 'SUCCESS';
}

interface Message {
  message: string;
  type: 'ERROR' | 'INFO' | 'WARNING' | 'SUCCESS';
}

const NotificationProvider: FC<NotificationProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<Notification | null>();

  const addNotification = (message: Message) => {
    if (notification?.id) {
      clearTimeout(notification.id);
    }

    const notificationId = setTimeout(() => {
      setNotification(null);
    }, 10000);

    const newNotification: Notification = {
      id: String(notificationId),
      ...message,
    };
    setNotification(newNotification);
  };

  const handleNotificationClick = () => {
    if (notification?.id) {
      clearTimeout(notification.id);
    }

    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {notification && (
        <S.NotificationContainer
          onClick={handleNotificationClick}
          type={notification.type}
        >
          {notification.message}
          <img src={DeleteIcon} alt="close-notification" width={24} />
        </S.NotificationContainer>
      )}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};

export default NotificationProvider;
