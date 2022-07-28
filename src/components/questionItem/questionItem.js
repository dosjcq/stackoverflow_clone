import React from 'react';

export const QuestionItem = ({ author, theme, numOfAnswers, tags }) => {
  return (
    <tr>
      <td>{author}</td>
      <td>{theme}</td>
      <td>{numOfAnswers}</td>
      <td>{tags}</td>
    </tr>
  );
};
