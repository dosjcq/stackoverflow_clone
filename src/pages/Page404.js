import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container404 = styled.div`
  max-width: 500px;
  margin: 26px auto;
`;

const Heading404 = styled.h1`
  font-size: 48px;
`;

const Link404 = styled(Link)`
  font-size: 24px;
  transition: all 0.3s ease-in;

  &:hover {
    color: #7ba7ab;
  }
`;

export const Page404 = () => {
  return (
    <Container404>
      <Heading404>Вы попали не туда</Heading404>
      <Link404 to='/'>Вернуться на главную</Link404>
    </Container404>
  );
};
