import styled from 'styled-components';

export const TableHead = styled.thead`
  background-color: aliceblue;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;

  th {
    border-right: 1px solid black;
    padding: 12px 8px;
  }
`;

export const TableRow = styled.tr`
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: antiquewhite;
  }
`;
