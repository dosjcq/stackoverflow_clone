import React from 'react';
import { Tags } from '../tags/Tags';

import { TableCell, TableAuthor } from './QuestionItem.styles';

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
