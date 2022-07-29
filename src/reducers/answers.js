const initialState = {
  answers: [],
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ANSWERS':
      return {
        ...state,
        answers: action.payload,
      };
    default:
      return state;
  }
};

export default answerReducer;
