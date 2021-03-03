import React, { useMemo } from 'react';

import CountUp from 'react-countup';

import dollarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import * as S from './styles';

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dollar' | 'arrowUp' | 'arrowDown';
  color: string; 
};

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color
}) => {

  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dollar':
        return dollarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
      default:
        return undefined;
    }
  },[icon]);

  return (
    <S.Container color={color}>
      <span>{title}</span>
      <h2>
        <CountUp 
          end={amount}
          prefix={'R$ '}
          separator='.'
          decimal=','
          decimals={2}
        />
      </h2>
      <small>{footerLabel}</small>
      {<img src={iconSelected} alt={title} />}
    </S.Container>
  );
}

export default WalletBox;
