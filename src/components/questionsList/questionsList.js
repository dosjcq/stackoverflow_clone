import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { useHttp } from '../../hooks/http.hook';
import {
  questionsFetching,
  questionsFetched,
  questionsFetchingError,
} from '../../actions';

import { QuestionItem } from '../questionItem/QuestionItem';
import { Spinner } from '../spinner/Spinner';

const TableHead = styled.thead`
  background-color: aliceblue;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;

  th {
    border-right: 1px solid black;
    padding: 12px 8px;
  }
`;

export const QuestionsList = () => {
  const { questions, questionsLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(questionsFetching());
    request(
      'https://api.stackexchange.com/2.3/questions?page=1&pagesize=10&order=desc&sort=activity&site=stackoverflow',
    )
      .then((data) => dispatch(questionsFetched(data.items)))
      .catch((err) => questionsFetchingError());

    // eslint-disable-next-line
  }, []);

  if (questionsLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (questionsLoadingStatus === 'error') {
    return (
      <tr>
        <td>Ошибка загрузки</td>
      </tr>
    );
  }

  const renderedQuestionsList = (arr) => {
    if (arr.length === 0) {
      return (
        <tr>
          <td>Вопросов нет</td>
        </tr>
      );
    }

    return arr.map(({ question_id, tags, owner, answer_count, title }) => {
      return (
        <QuestionItem
          key={question_id}
          author={owner.display_name}
          theme={title}
          numOfAnswers={answer_count}
          tags={tags}
        />
      );
    });
  };

  const elements = renderedQuestionsList(questions);
  return (
    <div>
      <table>
        <TableHead>
          <tr>
            <th>Автор вопроса</th>
            <th>Тема</th>
            <th>Количество ответов</th>
            <th>Тэги</th>
          </tr>
        </TableHead>
        <tbody>{elements}</tbody>
      </table>
    </div>
  );
};
