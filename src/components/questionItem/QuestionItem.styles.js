import styled from 'styled-components';

export const TableCell = styled.td`
  border-right: 1px solid black;
  padding: 12px 8px;
  font-size: 20px;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const TableAuthor = styled(TableCell)`
  font-weight: bold;
  color: #7ba7ab;
`;
