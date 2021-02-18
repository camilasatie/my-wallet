import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import * as S from './styles';

const List: React.FC = () => { 
  
  const options = [
    {value: 'Item', label: 'Item'}
  ]

  return (
    <S.Container>
      <ContentHeader title="Saídas" lineColor="#F7931B">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
  );
}

export default List;
