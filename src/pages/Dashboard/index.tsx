import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

import ImgHappy from '../../assets/happy.svg';
import ImgSad from '../../assets/sad.svg'
import ImgOps from '../../assets/ops.svg';

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
    else if(totalGains === 0 && totalExpenses === 0) {
      return {
        title: 'Ops!',
        description: 'Neste mês não há registros de entradas e saídas.',
        footerText: 'Parece que você não fez nenhum registro neste mês e ano selecionado',
        icon: ImgOps,
      }
    }
    else if(totalBalance === 0) {
      return {
        title: 'Ufaaa!',
        description: 'Neste mês, você gastou exatamente o que ganhou.',
        footerText: 'Tenha cuidado, no próximo mês tente poupar o seu dinheiro.',
        icon: ImgHappy,
      }
    } 
    else {
      return {
        title: 'Muito bem!',
        description: 'Sua carteira está positiva!',
        footerText: 'Continue Assim. Considere investir o seu saldo.',
        icon: ImgHappy,
      }
    }

  }, [totalBalance, totalExpenses, totalGains]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = Number(((totalGains / total) * 100).toFixed(1));
    const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));
    
    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: percentGains ? percentGains : 0, 
        color: '#E44C4E'
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: percentExpenses ? percentExpenses : 0, 
        color: '#F7931B'
      },
  ];

    return data;

  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return listOfMonths
    .map((_, month) => {
        
        let amountEntry = 0;
        gains.forEach(gain => {
            const date = new Date(gain.date);
            const gainMonth = date.getMonth();
            const gainYear = date.getFullYear();

            if(gainMonth === month && gainYear === yearSelected){
                try{
                    amountEntry += Number(gain.amount);
                }catch{
                    throw new Error('amountEntry is invalid. amountEntry must be valid number.')
                }
            }
        });

        let amountOutput = 0;
        expenses.forEach(expense => {
            const date = new Date(expense.date);
            const expenseMonth = date.getMonth();
            const expenseYear = date.getFullYear();

            if(expenseMonth === month && expenseYear === yearSelected){
                try{
                    amountOutput += Number(expense.amount);
                }catch{
                    throw new Error('amountOutput is invalid. amountOutput must be valid number.')
                }
            }
        });


        return {
            monthNumber: month,
            month: listOfMonths[month].substr(0, 3),
            amountEntry,
            amountOutput
        }
    })
    .filter(item => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
    });
  },[yearSelected]);

  const realationExpensesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
    .filter((expense) => {
        const date = new Date(expense.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return month === monthSelected && year === yearSelected;
    })
    .forEach((expense) => {
        if(expense.frequency === 'recorrente'){
            return amountRecurrent += Number(expense.amount);
        }

        if(expense.frequency === 'eventual'){
            return amountEventual += Number(expense.amount);
        }
    });

    const total = amountRecurrent + amountEventual;

    const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
    const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

    return [
        {
            name: 'Recorrentes',
            amount: amountRecurrent,
            percent: percentRecurrent ? percentRecurrent : 0, 
            color: "#F7931B"
        },
        {
            name: 'Eventuais',
            amount: amountEventual,
            percent: percentEventual ? percentEventual : 0,
            color: "#E44C4E"
        }
    ];
  },[monthSelected, yearSelected]);

  const realationGainsRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains
    .filter((gain) => {
        const date = new Date(gain.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return month === monthSelected && year === yearSelected;
    })
    .forEach((gain) => {
        if(gain.frequency === 'recorrente'){
            return amountRecurrent += Number(gain.amount);
        }

        if(gain.frequency === 'eventual'){
            return amountEventual += Number(gain.amount);
        }
    });

    const total = amountRecurrent + amountEventual;

    const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
    const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

    return [
        {
            name: 'Recorrentes',
            amount: amountRecurrent,
            percent: percentRecurrent ? percentRecurrent : 0, 
            color: "#F7931B"
        },
        {
            name: 'Eventuais',
            amount: amountEventual,
            percent: percentEventual ? percentEventual : 0,
            color: "#E44C4E"
        }
    ];
  },[monthSelected, yearSelected]);


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
          <PieChartBox data={relationExpensesVersusGains}/>
          <HistoryBox 
            data={historyData}
            lineColorAmountEntry="#e44c4e"
            lineColorAmountOutput="#F7931B"
          />
          <BarChartBox 
            title="Entradas"
            data={realationGainsRecurrentVersusEventual}
          />
          <BarChartBox 
            title="Saídas"
            data={realationExpensesRecurrentVersusEventual}
          />
        </S.Content>
    </S.Container>
  );
}

export default Dashboard;
