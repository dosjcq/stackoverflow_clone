const initialState = {
  questions: [],
  questionsLoadingStatus: 'idle',
  searchQuery: '',
  singleQuestion: [],
  answers: [],
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
    case 'SET_QUESTIONS':
      return {
        ...state,
        singleQuestion: action.payload,
        questionsLoadingStatus: 'idle',
      };
    case 'SET_ANSWERS':
      return {
        ...state,
        answers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
