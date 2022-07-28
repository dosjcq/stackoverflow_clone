const initialState = {
  questions: [],
  questionsLoadingStatus: 'idle',
  searchQuery: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'QUESTIONS_FETCHING':
      return {
        ...state,
        questionsLoadingStatus: 'loading',
      };
    case 'QUESTIONS_FETCHED':
      return {
        ...state,
        questions: action.payload,
        questionsLoadingStatus: 'idle',
      };
    case 'QUESTIONS_FETCHING_ERROR':
      return {
        ...state,
        questionsLoadingStatus: 'error',
      };
    case 'FIND_QUESTIONS':
      return {
        ...state,
        questions: action.payload.questions,
        searchQuery: action.payload.searchQuery,
        questionsLoadingStatus: 'idle',
      };
    default:
      return state;
  }
};

export default reducer;
