import React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  questionsFetching,
  questionsFetchingError,
  setQuestion,
  setAnswers,
} from '../../actions/index';
import { useHttp } from '../../hooks/http.hook';
import { Tags } from '../../components/tags/Tags';

import {
  AnswerWrapper,
  HTMLContent,
  QuestionPageWrapper,
} from './SingleQuestionPage.styles';

export const SingleQuestionPage = () => {
  const { questionId } = useParams();

  const { request } = useHttp();

  const { singleQuestion } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(questionsFetching());
    request(
      `questions/${questionId}?`,
      `&order=desc&sort=activity&filter=withbody&site=stackoverflow`,
    )
      .then((data) => dispatch(setQuestion(data.items)))
      .catch((err) => questionsFetchingError());

    request(
      `questions/${questionId}/answers?`,
      `&order=desc&sort=activity&filter=withbody&site=stackoverflow`,
    )
      .then((data) => dispatch(setAnswers(data.items)))
      .catch((err) => questionsFetchingError());
  }, [questionId, dispatch, request]);

  // const { owner, title, tags, body } = singleQuestion[0];
  // console.log(owner);
  console.log(singleQuestion[0]);

  return (
    <QuestionPageWrapper>
      <Link to='/'>Назад</Link>
      <AnswerWrapper>
        <h6>{singleQuestion[0].owner.display_name}</h6>
        <h2>{singleQuestion[0].title}</h2>
        <Tags tags={singleQuestion[0].tags} />
        <HTMLContent
          dangerouslySetInnerHTML={{ __html: singleQuestion[0].body }}
        ></HTMLContent>
      </AnswerWrapper>
    </QuestionPageWrapper>
  );
};
