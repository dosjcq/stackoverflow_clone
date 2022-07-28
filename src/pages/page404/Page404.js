import React from 'react';

import { Container404, Heading404, Link404 } from './Page404.styles';

export const Page404 = () => {
  return (
    <Container404>
      <Heading404>Вы попали не туда</Heading404>
      <Link404 to='/'>Вернуться на главную</Link404>
    </Container404>
  );
};
