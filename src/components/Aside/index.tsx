import React from 'react';
import {
  MdDashboard, 
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const Aside: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg src={logoImg} alt="Logo Minha Carteira" />
        <S.Title>Minha Carteira</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>

        <S.MenuItemLink href="#">
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>

        <S.MenuItemLink href="#">
          <MdArrowDownward />
          Saídas
        </S.MenuItemLink>

        <S.MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </S.MenuItemLink>
      </S.MenuContainer>
    </S.Container>
  );
}

export default Aside;
