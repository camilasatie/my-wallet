import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

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
      
      <S.Content>
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 120,00"
        />
      </S.Content>
    </S.Container>
  );
}

export default List;
