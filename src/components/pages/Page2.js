// import '../css/SecondPage.css';
import logo from '../../img/ntnu-logo.png';
import TitledBox from "../TitledTextBox";
import WaveTransition from '../WaveTransition';

export default secondPage;

function secondPage(){
    return (
        <div className="relative w-full h-screen m-0 bg-white-ivory">
            <div className='flex flex-col md:flex-row pt-4 mx-10 justify-evenly'>
                <div className="w-full md:w-2/5 h-fit">
                    <TitledBox title="About me" text="I have always had a facination for new technology, especially regarding computer technology, which is my reasoning for studying informatics. What i enjoy about this field of technology, is the ability to both be creatively expressive while staying in touch with advanced logical tasks. Within the field of IT, i am most experienced within software- and webdevelopement, but intrigued by topics like data-analytics, cloud computing, AI, Machine-learning and cybersecurity. In my sparetime i enjoy fly-fishing, playing guitar, hanging out with friends or noodling with some dev-projects of my own."/>
                </div>
                <div className="w-full md:w-2/5 h-fit">
                    <img className='md:w-full md:mt-16' src={logo} alt="NTNU logo"/> 
                </div>
            </div>
            <WaveTransition color="#A29BFE"/>
        </div>
    )
}