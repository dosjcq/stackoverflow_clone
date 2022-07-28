import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container404 = styled.div`
  max-width: 500px;
  margin: 26px auto;
`;

export const Heading404 = styled.h1`
  font-size: 48px;
`;

export const Link404 = styled(Link)`
  font-size: 24px;
  transition: all 0.3s ease-in;

  &:hover {
    color: #7ba7ab;
  }
`;
