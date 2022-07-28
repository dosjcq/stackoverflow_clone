import React from 'react';
import styled from 'styled-components';
import { Tags } from '../tags/Tags';

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
    <>
      <TableAuthor>{author}</TableAuthor>
      <TableCell>{theme}</TableCell>
      <TableCell>{numOfAnswers}</TableCell>
      <TableCell>
        <Tags tags={tags} />
      </TableCell>
    </>
  );
};
