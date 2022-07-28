import React from 'react';
import styled from 'styled-components';
import { Tags } from '../tags/Tags';

const TableRow = styled.tr`
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: antiquewhite;
  }
`;

const TableCell = styled.td`
  border-right: 1px solid black;
  padding: 12px 8px;
  font-size: 20px;
`;

const TableAuthor = styled(TableCell)`
  font-weight: bold;
  color: #7ba7ab;
`;

export const QuestionItem = ({ author, theme, numOfAnswers, tags }) => {
  return (
    <TableRow>
      <TableAuthor>{author}</TableAuthor>
      <TableCell>{theme}</TableCell>
      <TableCell>{numOfAnswers}</TableCell>
      <TableCell>
        <Tags tags={tags} />
      </TableCell>
    </TableRow>
  );
};
