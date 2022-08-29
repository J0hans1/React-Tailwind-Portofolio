//page 1 imports
import TitledBox from "./components/TitledTextBox";
import RoundImage from './components/RoundImage';
import SocialLinks from './components/buttons/SocialLinks';
import WaveTransition from './components/WaveTransition';
import Top from './components/pageTop';

import SecondPage from './components/pages/Page2';
import MiddlePage from './components/pages/Page3';
import FourthPage from './components/pages/Page4';

function App() {
  return (
    //page 1
    <div className="App overflow-hidden">
      <div className="flex flex-col w-full h-fit m-0 bg-gradient-to-b from-purple-100 to-sand-200">
              {/*Navbar*/}
              <Top/>
              {/*Content */}
              <div className='flex flex-col xl:flex-row justify-evenly mx-5 sm:mx-20 pt-10 sm:pt-20'>
                  {/*left-column/text and buttons 1*/}
                  <div className="flex flex-col mx-auto w-3/4 xl:w-2/5 h-fit">
                      <TitledBox title="Welcome to my portfolio!" text="Hello, I am Markus Johansen. I am a student of information technologies at the Norwegian University of  Science and Technology (NTNU), Based In Trondheim, Norway. I made this website because i wanted a 'web based' portfolio and an opportunity to accummulate skills within industry-relevant frameworks (React and Tailwind). The portfolio will contain relevant information about me, my education, skills, and work experience."/>
                      <div className="hidden md:block">
                          <SocialLinks/>
                      </div>
                  </div>

                  {/*image/right-column //!forsvinner ved low */}
                  <div className="mx-auto mb-2 mt-5 sm:my-10">
                      <RoundImage pic="1"/>
                  </div>

                  {/*social links 2 */}
                  <div className="mx-auto flex md:hidden">
                      <SocialLinks/>
                  </div>
              </div>
              
              {/*transition */}
              <WaveTransition color="#FFFCF3"/>
          </div>
      <SecondPage />
      <MiddlePage />
      <FourthPage />
      {/*<LastPage />*/}
    </div>
  );
}

export default App;
