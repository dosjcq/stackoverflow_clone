import React from 'react';
import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useHttp } from '../../hooks/http.hook';
import {
  questionsFetching,
  questionsFetched,
  questionsFetchingError,
  activeFilterChanged,
} from '../../actions';

import { QuestionItem } from '../questionItem/QuestionItem';
import { Spinner } from '../spinner/Spinner';

import { TableHead, TableRow } from './QuestionsList.styles';

export const QuestionsList = memo(() => {
  const filtredQuestions = useSelector((state) => {
    if (state.questionsReducer.activeFilter === 'all') {
      return state.questionsReducer.questions;
    } else {
      return state.questionsReducer.questions.sort(
        (a, b) =>
          b[state.questionsReducer.activeFilter] -
          a[state.questionsReducer.activeFilter],
      );
    }
  });
  const { questionsLoadingStatus, searchQuery, activeFilter } = useSelector(
    (state) => state,
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) return;

    dispatch(questionsFetching());
    request(
      'questions?',
      '&page=1&pagesize=10&order=desc&sort=activity&site=stackoverflow',
    )
      .then((data) => {
        console.log(data, 'data');
        dispatch(questionsFetched(data.items));
      })
      .catch((err) => {
        console.log(err);
        questionsFetchingError();
      });

    // eslint-disable-next-line
  }, []);

  const handleFilter = (e) => {
    dispatch(activeFilterChanged(e.target.value));
  };

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

  const elements = renderedQuestionsList(filtredQuestions);
  return (
    <div>
      <span>Фильтры</span>
      <select value={activeFilter} onChange={handleFilter}>
        <option value='all'>По умолчанию</option>
        <option value='creation_date'>По дате создания</option>
        <option value='view_count'>По количеству просмотров</option>
        <option value='answer_count'>По количеству ответов</option>
      </select>
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
});
