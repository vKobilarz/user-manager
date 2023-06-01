import React, { FC, ReactNode } from 'react';

import * as S from './styles';

interface PageContainer {
  children: ReactNode;
}

const PageContainer: FC<PageContainer> = ({ children }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default PageContainer;
