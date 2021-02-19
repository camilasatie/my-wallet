import React from 'react';

import * as S from './styles';

interface IHistoryFinanceCardProps {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({ 
  cardColor, tagColor, title, subtitle, amount
}) => {
  return (
    <S.Container color={cardColor}>
      <S.Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </S.Container>
  );
}

export default HistoryFinanceCard;
