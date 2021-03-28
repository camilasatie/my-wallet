import styled from 'styled-components';

interface ILabelProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px;
  
  border-radius: 7px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;

  > h2 {
    margin-bottom: 20px;
    padding-left: 18px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
`;

export const Label = styled.li<ILabelProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  margin-right: 25px;

  > div {
    background-color: ${props => props.color};
    border-radius: 5px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;

    width: 40px;
    height: 40px;
  }

  > span {
    margin-left: 5px;
  }
`;


export const ChartContainer = styled.div`
  flex: 1;
  height: 260px;
`;
