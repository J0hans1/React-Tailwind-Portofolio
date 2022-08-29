// import '../css/SecondPage.css';
import logo from '../../img/ntnu-logo.png';
import TitledBox from "../TitledTextBox";
import WaveTransition from '../WaveTransition';
import Topics from '../buttons/TopicBox';
import { useRef } from 'react';

export default SecondPage;

function SecondPage(){
    const inputRef = useRef()
    
    return (
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
    )
}