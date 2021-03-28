import styled from 'styled-components';

interface ILabelProps {
  color: string;
}

export const Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  border-radius: 7px;

  display: flex;

  width: 48%;
  min-height: 260px;

  margin: 10px 0;
`;

export const SideLeft = styled.aside`
  flex: 1;
  padding: 30px 20px;

  > h2 {
    padding-left: 18px;
    margin-bottom: 10px;
  }
`;

export const LabelContainer = styled.ul`
  list-style: none;

  max-height: 175px;
  padding-right: 15px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.tertiary};
  }
`;

export const Label = styled.li<ILabelProps>`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  padding-left: 16px;

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

export const SideRight = styled.main`
  flex: 1;
  min-height: 150px;

  display: flex;
  justify-content: center;
  padding-top: 35px;
`;
