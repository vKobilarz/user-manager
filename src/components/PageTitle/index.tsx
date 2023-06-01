import React, { FC, ReactNode } from 'react';

import * as S from './styles';

interface PageTitleProps {
  children: ReactNode;
  actions?: ReactNode;
}

const PageTitle: FC<PageTitleProps> = ({ children, actions }) => {
  return (
    <S.TitleContainer>
      <h1>{children}</h1>
      {actions && <S.TitleActions>{actions}</S.TitleActions>}
    </S.TitleContainer>
  );
};

export default PageTitle;
