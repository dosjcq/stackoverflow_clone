import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHttp } from '../../hooks/http.hook';
import {
  questionsFetching,
  questionsFetched,
  questionsFetchingError,
} from '../../actions';

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
    return <h5>Ошибка загрузки</h5>;
  }

  const renderedQuestionsList = (arr) => {
    if (arr.length === 0) {
      return <h5>Вопросов нет</h5>;
    }

    return arr.map(({ question_id, ...props }) => {
      return <h5 key={question_id}>{question_id}</h5>;
    });
  };

  const elements = renderedQuestionsList(questions);
  return <div>{elements}</div>;
};
