import FrontPage from './components/pages/Page1';
import SecondPage from './components/pages/Page2';
import MiddlePage from './components/pages/Page3';
import FourthPage from './components/pages/Page4';
import LastPage from './components/pages/Page5';

function App() {
  return (
    <div className="App overflow-hidden">
      <FrontPage />
      <SecondPage />
      <MiddlePage />
      <FourthPage />
      <LastPage />
    </div>
  );
}

export default App;
