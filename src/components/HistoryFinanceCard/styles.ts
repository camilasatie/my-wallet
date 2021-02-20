import styled from 'styled-components';

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  position: relative;
  background-color: ${props => props.theme.colors.tertiary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-radius: 10px;
  margin: 10px 0;
  padding: 12px 10px;

  cursor: pointer;
  transition: all .3s;


  &:hover {
    opacity: .7s;
    transform: translateX(10px)
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    padding-left: 10px;
  }

  > div span {
    font-weight: 500;
    font-size: 20px;
  }
`;

export const Tag = styled.div`
  position: absolute;
  left: 0; 
  width: 12px;
  height: 60%;
  background-color: ${props => props.color};

`;