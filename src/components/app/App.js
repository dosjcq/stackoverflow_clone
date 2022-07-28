import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { StartPage, SingleQuestionPage, Page404 } from '../../pages';

function App() {
  return (
    <Router>
      <main className='app'>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route
            path='/question/:questionId'
            element={<SingleQuestionPage />}
          />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
