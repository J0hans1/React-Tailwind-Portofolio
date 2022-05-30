import '../css/SecondPage.css';
import logo from '../img/ntnu-logo.png';
import TitledBox from "./TitledTextBox";
import WaveTransition from './WaveTransition';

export default secondPage;

function secondPage(){
    return (
        <div id="page2" class="pages pagesVar2">
            <div class="left-column">
                <TitledBox title="About me" text="I have always had a facination for new technology, especially regarding computer technology, which is the reason for me studying informatics. What i enjoy about this field of technology, is the ability to both be creatively expressive while sticking to the logic behind the software. I enjoy fullstack developement! While i enjoy development i also think that webtechnologies are very interesting in particular. In my sparetime i enjoy fly-fishing, playing guitar, hanging out with friends or noodling with some dev-projects of my own."/>
            </div>
            <div class="right-column">
                <img id="NTNU-logo" src={logo} alt="NTNU logo"/> 
            </div>
            <WaveTransition color="#A29BFE"/>
        </div>
    )
}