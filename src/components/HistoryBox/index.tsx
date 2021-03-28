import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import * as S from './styles';

interface IHistoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[],
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data, lineColorAmountEntry, lineColorAmountOutput
}) =>(
  <S.Container>
    <S.HeaderContainer>
      <h2>Histórico de Saldo</h2>
      <S.LegendContainer>
        <S.Label color={lineColorAmountEntry}>
          <div>{}</div>
          <span>Entradas</span>
        </S.Label>
        <S.Label color={lineColorAmountOutput}>
          <div>{}</div>
          <span>Saídas</span>
        </S.Label>
      </S.LegendContainer>
    </S.HeaderContainer>
        
    <S.ChartContainer>
      <ResponsiveContainer>
        <LineChart data={data} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          <XAxis dataKey="month" stroke="#cecece" />
          <Tooltip formatter={formatCurrency} />
          <Line 
            type="monotone"                
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorAmountEntry}
            strokeWidth={5}
            dot={{ r: 5}}
            activeDot={{ r: 8}}
          />
          <Line 
            type="monotone"                
            dataKey="amountOutput"
            name="Saídas"
            stroke={lineColorAmountOutput}
            strokeWidth={5}
            dot={{ r: 5}}
            activeDot={{ r: 8}}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.ChartContainer>
  </S.Container>
);

export default HistoryBox;
