import React from 'react';
import styled from 'styled-components';

const TableRow = styled.tr`
  border: 1px solid black;
  cursor: pointer;

  &:hover td {
    color: green;
  }
`;

const TableCell = styled.td`
  border-right: 1px solid black;
  padding: 12px 8px;
  transition: all 0.3s ease-in;
  font-size: 20px;
`;

const TableAuthor = styled(TableCell)`
  font-weight: bold;
  color: blue;
`;

export const QuestionItem = ({ author, theme, numOfAnswers, tags }) => {
  return (
    <TableRow>
      <TableAuthor>{author}</TableAuthor>
      <TableCell>{theme}</TableCell>
      <TableCell>{numOfAnswers}</TableCell>
      <TableCell>{tags}</TableCell>
    </TableRow>
  );
};
