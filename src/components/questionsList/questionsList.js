import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHttp } from '../../hooks/http.hook';
import {
  questionsFetching,
  questionsFetched,
  questionsFetchingError,
} from '../../actions';

import { QuestionItem } from '../questionItem/questionItem';
import { Spinner } from '../spinner/Spinner';

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
      .catch(() => questionsFetchingError());

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
        // <table>
        <QuestionItem
          key={question_id}
          author={owner.display_name}
          theme={title}
          numOfAnswers={answer_count}
          tags={tags}
        />
        // </table>
      );
      // return <h5>{question_id}</h5>;
    });
  };

  const elements = renderedQuestionsList(questions);
  return (
    <table>
      <thead>
        <tr>
          <th>Автор вопроса</th>
          <th>Тема</th>
          <th>Количество ответов</th>
          <th>Тэги</th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
};
