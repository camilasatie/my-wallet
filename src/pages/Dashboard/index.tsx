import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import * as S from './styles';

const Dashboard: React.FC = () => {

  const options = [
    {value: 'Item', label: 'Item'}
  ]
  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#d50100">
        <SelectInput options={options} onChange={() => {}}/>
      </ContentHeader>
    </S.Container>
  );
}

export default Dashboard;
