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
    type: 'SET_QUESTIONS',
    payload: questions,
  };
};
