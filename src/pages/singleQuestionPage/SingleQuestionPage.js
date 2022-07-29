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
  AnswerItem,
  AnswersList,
} from './SingleQuestionPage.styles';
import { Spinner } from '../../components/spinner/Spinner';

export const SingleQuestionPage = () => {
  const { questionId } = useParams();

  const { request } = useHttp();

  const { singleQuestion } = useSelector((state) => state.questionsReducer);
  const { answers } = useSelector((state) => state.answerReducer);
  const dispatch = useDispatch();

  console.log(answers);

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
      .catch((err) => {
        console.log(err);
        questionsFetchingError();
      });
  }, [questionId, dispatch, request]);

  const displayedContent = singleQuestion[0] ? (
    <AnswerWrapper>
      <h6>{singleQuestion[0].owner.display_name}</h6>
      <h2>{singleQuestion[0].title}</h2>
      <Tags tags={singleQuestion[0].tags} />
      <HTMLContent
        dangerouslySetInnerHTML={{ __html: singleQuestion[0].body }}
      ></HTMLContent>
    </AnswerWrapper>
  ) : (
    <Spinner />
  );

  const displayedAnswers = !!answers ? (
    <AnswersList>
      <h2>Ответы:</h2>
      {answers.map(({ owner, answer_id, body }) => (
        <AnswerItem key={answer_id}>
          <h6>{owner.display_name}</h6>
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </AnswerItem>
      ))}
    </AnswersList>
  ) : (
    <h2>Отвтетов пока нет</h2>
  );

  return (
    <QuestionPageWrapper>
      <Link to='/'>Назад</Link>
      {displayedContent}
      {displayedAnswers}
    </QuestionPageWrapper>
  );
};
