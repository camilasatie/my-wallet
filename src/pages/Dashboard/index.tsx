import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChart from '../../components/PieChart';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

import ImgHappy from '../../assets/happy.svg';
import ImgSad from '../../assets/sad.svg'

import * as S from './styles';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    });    
  },[]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year,
      }
    });

  },[]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount. Amount must a number.')
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount. Amount must a number.')
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if(totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês, você gastou mais do que deveria',
        footerText: 'Verifique seus gastos e tente reduzir gastos desnecessários.',
        icon: ImgSad,
      } 
    }
    else if(totalBalance === 0) {
      return {
        title: 'Ufaaa!',
        description: 'Neste mês, você gastou exatamente o que ganhou.',
        footerText: 'Tenha cuidado, no próximo mês tente poupar o seu dinheiro.',
        icon: ImgHappy,
      }
    } else {
      return {
        title: 'Muito bem!',
        description: 'Sua carteira está positiva!',
        footerText: 'Continue Assim. Considere investir o seu saldo.',
        icon: ImgHappy,
      }
    }

  }, [totalBalance]);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    }
    catch {
      throw new Error('Invalid month value. Only accepts 0 to 24.')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    }
    catch {
      throw new Error('Invalid year value. Only accepts integer numbers.')
    }
  }
  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput 
            options={months} 
            onChange={(e) => handleMonthSelected(e.target.value)} 
            defaultValue={monthSelected}
          />
          <SelectInput 
            options={years} 
            onChange={(e) => handleYearSelected(e.target.value)}
            defaultValue={yearSelected}
          />
        </ContentHeader>

        <S.Content>
          <WalletBox 
            title="saldo"
            amount={totalBalance}
            footerLabel="atualizado com base nas entradas e saídas"
            icon="dollar"
            color="#4E41F0"
          />
          <WalletBox 
            title="entradas"
            amount={totalGains}
            footerLabel="atualizado com base nas entradas e saídas"
            icon="arrowUp"
            color="#F7931B"
          />
          <WalletBox 
            title="saídas"
            amount={totalExpenses}
            footerLabel="atualizado com base nas entradas e saídas"
            icon="arrowDown"
            color="#E44C4E"
          />
          <MessageBox 
            title={message.title}
            image={message.icon}
            description={message.description}
            footerText={message.footerText}
          />
          <PieChart />
        </S.Content>
    </S.Container>
  );
}

export default Dashboard;
