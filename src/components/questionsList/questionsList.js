import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useHttp } from '../../hooks/http.hook';
import {
  questionsFetching,
  questionsFetched,
  questionsFetchingError,
} from '../../actions';

import { QuestionItem } from '../questionItem/QuestionItem';
import { Spinner } from '../spinner/Spinner';

import { TableHead, TableRow } from './QuestionsList.styles';

export const QuestionsList = () => {
  const { questions, questionsLoadingStatus, searchQuery } = useSelector(
    (state) => state,
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  const navigate = useNavigate();

  // const openQuestion = (id) => {
  //   navigate(`/question/${id}`);
  // };

  useEffect(() => {
    if (searchQuery) {
      return;
    }

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
    return <h2>Ошибка загрузки</h2>;
  }

  const renderedQuestionsList = (arr) => {
    if (arr.length === 0) {
      return (
        <tr>
          <td>Вопросов нет</td>
        </tr>
      );
    }

    return arr.map(({ question_id, tags, owner, answer_count, title }) => (
      <TableRow
        onClick={() => navigate(`/question/${question_id}`)}
        key={question_id}
      >
        <QuestionItem
          author={owner.display_name}
          theme={title}
          numOfAnswers={answer_count}
          tags={tags}
        />
      </TableRow>
    ));
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
