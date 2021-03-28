import React from 'react';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

import * as S from './styles';

const Layout: React.FC = ({ children }) => (
  <S.Container>
    <MainHeader />
    <Aside />
    <Content>
      { children }
    </Content>
  </S.Container>
);

export default Layout;
