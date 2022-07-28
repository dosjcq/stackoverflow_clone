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
