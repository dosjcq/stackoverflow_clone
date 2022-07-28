import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import { QuestionsList } from '../components/questionsList/QuestionsList';
import { SearchField } from '../components/searchField/SearchField';

const StartPageWrapper = styled.div`
  max-width: 1440px;
  margin: 80px auto 80px auto;
`;

const QuestionsHeading = styled.h2`
  font-size: 32px;
  margin: 60px 0 12px 0;
  text-align: center;
`;

export const StartPage = () => {
  const { searchQuery } = useSelector((state) => state);

  return (
    <StartPageWrapper>
      <SearchField />
      <QuestionsHeading>
        {searchQuery ? 'По вашему запросу найдено:' : 'Последние вопросы:'}
      </QuestionsHeading>
      <QuestionsList />
    </StartPageWrapper>
  );
};
