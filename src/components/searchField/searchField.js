import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useHttp } from '../../hooks/http.hook';
import { findQuestions, questionsFetchingError } from '../../actions';

const SearchForm = styled.form`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 2px solid #7ba7ab;
  border-radius: 5px;
  outline: none;
  background: #f9f0da;
  color: #9e9c9c;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0px;
  width: 100px;
  height: 42px;
  border: none;
  background: #7ba7ab;
  border: 2px solid #7ba7ab;

  border-radius: 0 5px 5px 0;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background: lightgray;
    color: lightslategrey;
  }
`;

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
    <SearchForm onSubmit={onSubmitHandler}>
      <SearchInput
        name='s'
        placeholder='Искать здесь...'
        type='search'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchButton type='submit'>Поиск</SearchButton>
    </SearchForm>
  );
};
