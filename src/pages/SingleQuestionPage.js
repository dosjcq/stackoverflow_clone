import React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  questionsFetching,
  questionsFetchingError,
  setQuestion,
} from '../actions/index';
import { useHttp } from '../hooks/http.hook';

//https://api.stackexchange.com/2.3/questions/73156577?order=desc&sort=activity&site=stackoverflow

export const SingleQuestionPage = () => {
  const { questionId } = useParams();

  const { request } = useHttp();

  const { singleQuestion } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(questionsFetching());
    request(
      `https://api.stackexchange.com/2.3/questions/${questionId}?order=desc&sort=activity&filter=withbody&site=stackoverflow`,
    )
      .then((data) => dispatch(setQuestion(data.items)))
      .catch((err) => questionsFetchingError());
  }, [questionId, dispatch, request]);

  // const { owner, title, tags, body } = singleQuestion[0];
  // console.log(owner);

  return (
    <div>
      <Link to='/'>Назад</Link>
      <div>
        <p>sin</p>
      </div>
    </div>
  );
};
