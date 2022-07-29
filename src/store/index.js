import { createStore, combineReducers } from 'redux';

import questionsReducer from '../reducers/questions';
import answerReducer from '../reducers/answers';

const store = createStore(
  combineReducers({ questionsReducer, answerReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
