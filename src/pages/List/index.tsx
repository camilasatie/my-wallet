import React, { useMemo, useState, useEffect } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import * as S from './styles';

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  type: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => { 
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const { type } = match.params;

  const header = useMemo(() => {
    return type === 'entry-balance' 
      ? {title: 'Entradas', lineColor: '#F7931B'} 
      : {title: 'Saídas', lineColor: '#E44C4E'} 
  },[type]);

  const listData = useMemo(() => {
    return type === 'entry-balance'
      ? gains
      : expenses;
  },[type]);

  // Refatorar os dois arrays abaixo. Info precisa vir de acordo com os lançamentos
  const months = [
    {value: 7, label: 'Julho'},
    {value: 8, label: 'Agosto'},
    {value: 2, label: 'Fevereiro'},
    {value: 9, label: 'Setembro'},
  ];

  const years = [
    {value: 2021, label: 2021},
    {value: 2020, label: 2020},
    {value: 2019, label: 2019},
    {value: 2018, label: 2018},
  ];

  useEffect(() => {
    const filteredData = listData.filter(item => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const formattedData = filteredData.map(item => {
      return {
        id: String(new Date().getTime() + item.amount),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        type: item.type,
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      }

    })

    setData(formattedData)
  },[listData, monthSelected, yearSelected])

  return (
    <S.Container>
      <ContentHeader title={header.title} lineColor={header.lineColor}>
        <SelectInput 
          options={months} 
          onChange={(e) => setMonthSelected(e.target.value)} 
          defaultValue={monthSelected}
        />
        <SelectInput 
          options={years} 
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <S.Filters>
        <button 
          type="button"
          className="tag-filter tag-filter-recurrent"
        >
          Recorrentes
        </button>
        <button 
          type="button"
          className="tag-filter tag-filter-eventual"
        >
          Eventuais
        </button>
      </S.Filters>
      
      <S.Content>
        {
          data.map(item => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
            
          ))
        }
      </S.Content>
    </S.Container>
  );
}

export default List;
