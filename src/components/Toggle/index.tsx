import React from 'react';

import * as S from './styles';

const Toggle: React.FC = () =>(
  <S.Container>
    <S.ToggleLabel>Light</S.ToggleLabel>
    <S.ToggleSelector 
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log('mudou')}
    />
    <S.ToggleLabel>Dark</S.ToggleLabel>
  </S.Container>
);

export default Toggle;
