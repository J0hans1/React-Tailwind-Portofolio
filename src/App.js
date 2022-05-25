import './css/style.css'
import './css/App.css';
import FrontPage from './components/FrontPage';
import SecondPage from './components/SecondPage';
import MiddlePage from './components/MiddlePage';
import FourthPage from './components/FourthPage';
import LastPage from './components/LastPage';

function App() {
  return (
    <div className="App">
      <FrontPage />
      <SecondPage />
      <MiddlePage />
      <FourthPage />
      <LastPage />
    </div>
  );
}

export default App;
