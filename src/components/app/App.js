import { QuestionsList } from '../questionsList/questionsList';
import { SearchField } from '../searchField/searchField';

function App() {
  return (
    <main className='App'>
      <div className='search-field'>
        <SearchField />
      </div>
      <div className='content'>
        <QuestionsList />
      </div>
    </main>
  );
}

export default App;
