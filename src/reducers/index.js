const initialState = {
  questions: [],
  filtredQuestions: [],
  activeFilter: [],
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
        filtredQuestions:
          state.activeFilter === 'all'
            ? action.payload
            : action.payload.sort(
                (prev, next) =>
                  prev[state.activeFilter] - next[state.activeFilter],
              ),
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
        filtredQuestions: action.payload.questions,
        activeFilter: 'all',
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
    case 'ACTIVE_FILTER_CHANGED':
      return {
        ...state,
        activeFilter: action.payload,
        filtredQuestions:
          action.payload === 'all'
            ? state.questions
            : state.questions.sort(
                (a, b) => b[action.payload] - a[action.payload],
              ),
      };
    default:
      return state;
  }
};

export default reducer;
