import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHttp } from '../../hooks/http.hook';
import { findQuestions, questionsFetchingError } from '../../actions';

import { SearchButton, SearchForm, SearchInput } from './SearchField.styles';

export const SearchField = ({ query }) => {
  const [searchQuery, setSearchQuery] = useState(query);

  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    request(
      `search/advanced?`,
      `&order=desc&sort=activity&q=${searchQuery}&filter=withbody&site=stackoverflow`,
    )
      .then((res) =>
        dispatch(findQuestions({ questions: res.items, searchQuery })),
      )
      .catch((err) => dispatch(questionsFetchingError()));
  };

  return (
    <SearchForm onSubmit={onSubmitHandler}>
      <SearchInput
        name='s'
        value={searchQuery}
        placeholder='Искать здесь...'
        type='search'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchButton type='submit'>Поиск</SearchButton>
    </SearchForm>
  );
};
