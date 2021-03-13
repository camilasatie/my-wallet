import React from 'react';

import * as S from './styles';

const PieChart: React.FC = ({ children }) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default PieChart;
