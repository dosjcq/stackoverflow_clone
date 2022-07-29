const initialState = {
  questions: [],
  activeFilter: [],
  questionsLoadingStatus: 'idle',
  searchQuery: '',
  singleQuestion: [],
};

const questionsReducer = (state = initialState, action) => {
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
        activeFilter: 'all',
        searchQuery: action.payload.searchQuery,
        questionsLoadingStatus: 'idle',
      };
    case 'SET_QUESTION':
      return {
        ...state,
        singleQuestion: action.payload,
        questionsLoadingStatus: 'idle',
      };
    case 'ACTIVE_FILTER_CHANGED':
      return {
        ...state,
        activeFilter: action.payload,
      };

    default:
      return state;
  }
};

export default questionsReducer;
