export const questionsFetching = () => {
  return {
    type: 'QUESTIONS_FETCHING',
  };
};

export const questionsFetched = (questions) => {
  return {
    type: 'QUESTIONS_FETCHED',
    payload: questions,
  };
};

export const questionsFetchingError = () => {
  return {
    type: 'QUESTIONS_FETCHING_ERROR',
  };
};

export const findQuestions = ({ questions, searchQuery }) => {
  return {
    type: 'FIND_QUESTIONS',
    payload: {
      questions,
      searchQuery,
    },
  };
};

export const setQuestion = (questions) => {
  return {
    type: 'SET_QUESTION',
    payload: questions,
  };
};

export const setAnswers = (answers) => {
  return {
    type: 'SET_ANSWERS',
    payload: answers,
  };
};

export const activeFilterChanged = (filter) => {
  return {
    type: 'ACTIVE_FILTER_CHANGED',
    payload: filter,
  };
};
