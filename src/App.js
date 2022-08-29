//page 1 imports
import TitledBox from "./components/TitledTextBox";
import RoundImage from './components/RoundImage';
import SocialLinks from './components/buttons/SocialLinks';
import WaveTransition from './components/WaveTransition';
import Top from './components/pageTop';

//page 2 imports
import logo from './img/ntnu-logo.png';
import Topics from './components/buttons/TopicBox';
import { useRef } from 'react';

import MiddlePage from './components/pages/Page3';
import FourthPage from './components/pages/Page4';

function App() {
  const inputRef = useRef()

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


          {/*page 2 */}
          <div ref={inputRef} className="relative w-full h-fit m-0 bg-white-ivory">
            {/*content */}
            <div className='flex flex-col lg:justify-evenly mx-5 sm:mx-20 pt-4'>

                {/*top row */}
                <div className='flex flex-col xl:flex-row justify-evenly'>
                    <div className="w-full xl:w-2/5 h-fit">
                        <TitledBox title="About me" text="I have always had a facination for new technology, especially regarding computer technology, which is my reasoning for studying informatics. What i enjoy about this field of technology, is the ability to both be creatively expressive while staying in touch with advanced logical tasks. Within the field of IT, i am most experienced within software- and webdevelopement, but intrigued by topics like data-analytics, cloud computing, AI, Machine-learning and cybersecurity. In my sparetime i enjoy fly-fishing, playing guitar, hanging out with friends or noodling with some dev-projects of my own."/>
                    </div>
                    <div className="mx-auto xl:mx-0 w-full sm:w-7/12 xl:w-2/5 h-fit"> {/*!center the image */}
                        <img className='mt-16' src={logo} alt="NTNU logo"/> 
                    </div>
                </div>

                {/*bottom row */}
                <div className="flex flex-col xl:flex-row-reverse sm:mt-16 lg:mt-20 justify-evenly">
                    <div className="w-full xl:w-2/5 h-fit">
                        <TitledBox title="Skillset and technologies" text="I have worked with the following technologies in school or as a part of my sparetime software-development. I am currently most skilled within Java and JavaScript programming, and i feel passionate about the entire stack of development (front- and backend). While this page is IT-focused, i have also included some skillsets which was important during my previous employments."/>
                    </div>
                    <div className="w-full xl:w-2/5 h-fit">
                        <Topics/>
                    </div>
                </div>
            </div>


            {/*transition */}
            <WaveTransition color="#A29BFE"/>
        </div>
      <MiddlePage />
      <FourthPage />
      {/*<LastPage />*/}
    </div>
  );
}

export default App;
