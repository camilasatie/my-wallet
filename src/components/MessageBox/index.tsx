import React from 'react';

import * as S from './styles';

interface IMessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  image: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footerText,
  image
}) => {
  return (
    <S.Container>
      <header>
        <h1>
          {title}
          <img src={image} alt={title}/> 
        </h1>
        <p>{description}</p>
      </header>

      <footer>
        <span>{footerText}</span>
      </footer>
    </S.Container>
  );
}

export default MessageBox;
