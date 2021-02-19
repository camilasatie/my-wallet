import styled from 'styled-components';

interface IContainerProps {
  color: string;
}

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  position: relative;
  background-color: ${props => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-radius: 5px;
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
`;

export const Tag = styled.div`
  position: absolute;
  left: 0; 
  width: 10px;
  height: 60%;
  background-color: ${props => props.color};

`;