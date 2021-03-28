import React from 'react';
import Toggle from '../Toggle';

import * as S from './styles';

const MainHeader: React.FC = () => (
  <S.Container>
    <Toggle />

    <S.Profile>
      <S.Welcome>Olá,</S.Welcome>
      <S.UserName>Camila Satie Nagano</S.UserName>
    </S.Profile>
  </S.Container>
);

export default MainHeader;
