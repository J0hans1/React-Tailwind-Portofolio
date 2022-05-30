import '../css/FourthPage.css';
import TitledBox from "./TitledTextBox";
import Timeline from './Timeline';
import WaveTransition from './WaveTransition';

export default FourthPage;

function FourthPage(){
    return (
        <div id="page4" class="pages pagesVar2">
            <div id="central-column">
                <Timeline/>
                <div id="cv-download-container">
                    <TitledBox title="Do you care to learn more?" text="Download my curriculum vitae PDF, by clicking the button below!"/>
                    <button>Download CV</button>
                </div>
            </div>
            <WaveTransition color="#A29BFE"/>
        </div>
    )
}