import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip,
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import * as S from './styles';

interface IBarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[]
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => {
  return (
    <S.Container>
      <S.SideLeft>
        <h2>{title}</h2>
        <S.LabelContainer>
          {
            data.map((indicator) => (
              <S.Label key={indicator.name} color={indicator.color}>
                <div>{indicator.percent}%</div>
                <span>{indicator.name}</span>
              </S.Label>
            ))
          }
        </S.LabelContainer>
      </S.SideLeft>


      <S.SideRight>
        <ResponsiveContainer>
            <BarChart data={data}>
              <Bar dataKey='amount' name='Valor'>
                {
                  data.map((indicator) => (
                    <Cell 
                      key={indicator.name}
                      fill={indicator.color}
                    />
                  ))
                }                
              </Bar>
              <Tooltip 
                formatter={formatCurrency} 
                cursor={{fill: 'none'}}
              />
            </BarChart>
          </ResponsiveContainer>
      </S.SideRight>
    </S.Container>
  );
}

export default BarChartBox;
