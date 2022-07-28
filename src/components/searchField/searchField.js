import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHttp } from '../../hooks/http.hook';
import { findQuestions, questionsFetchingError } from '../../actions';

export const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    request(
      `https://api.stackexchange.com/2.3/search/advanced?order=desc&sort=activity&q=${searchQuery}&filter=withbody&site=stackoverflow`,
    )
      .then((res) =>
        dispatch(findQuestions({ questions: res.items, searchQuery })),
      )
      .catch((err) => dispatch(questionsFetchingError()));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        name='s'
        placeholder='Искать здесь...'
        type='search'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type='submit'>Поиск</button>
    </form>
  );
};
