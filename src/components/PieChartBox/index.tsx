import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

import * as S from './styles';

interface IPieChartBoxProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartBox: React.FC<IPieChartBoxProps> = ({ data }) => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
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
        <PieChart>
          <Pie 
            data={data}
            labelLine={false}
            dataKey='percent'
          >
            {
              data.map((indicator) => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </S.SideRight>
  </S.Container>

);

export default PieChartBox;
