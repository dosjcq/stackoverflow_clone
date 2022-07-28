import React from 'react';

import { useSelector } from 'react-redux';

import { QuestionsList } from '../../components/questionsList/QuestionsList';
import { SearchField } from '../../components/searchField/SearchField';

import { StartPageWrapper, QuestionsHeading } from './StartPage.styles';

export const StartPage = () => {
  const { searchQuery } = useSelector((state) => state);

  return (
    <StartPageWrapper>
      <SearchField query={searchQuery} />
      <QuestionsHeading>
        {searchQuery ? 'По вашему запросу найдено:' : 'Последние вопросы:'}
      </QuestionsHeading>
      <QuestionsList />
    </StartPageWrapper>
  );
};
