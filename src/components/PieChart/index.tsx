import React from 'react';
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from 'recharts';

import * as S from './styles';

const PieChart: React.FC = () => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
      <S.LabelContainer>
        <S.Label color="#F7931B">
          <div>95%</div>
          <span>Entradas</span>
        </S.Label>

        <S.Label color="#E44C4E">
          <div>5%</div>
          <span>Saídas</span>
        </S.Label>
      </S.LabelContainer>
    </S.SideLeft>

    <S.SideRight>
      {/* <ResponsiveContainer>
        <PieChart>
          <Pie 
            data={{}}
            labelLine={false}
            dataKey="percent"
          >
            {}
          </Pie>
        </PieChart>
      </ResponsiveContainer> */}
    </S.SideRight>
  </S.Container>

);

export default PieChart;
