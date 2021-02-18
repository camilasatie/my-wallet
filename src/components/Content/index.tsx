import React from 'react';
import ContentHeader from '../ContentHeader';

import * as S from './styles';

const Content: React.FC = ({ children }) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default Content;
