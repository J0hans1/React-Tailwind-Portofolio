import '../css/LastPage.css';
import RoundImage from './RoundImage';
import TitledBox from "./TitledTextBox";
import MailComponent from './Mail';

export default LastPage;

function LastPage(){
    return (
        <div id="LastPage" class="pages pagesVar1">
            <div id="last-left-column" class="left-column">
                <RoundImage/>
                <a id="download-btn" href='../content/' download="CV.docx"> 
                    <button>Download CV</button>
                </a>
            </div>
            <div class="right-column">
                <TitledBox title="Still interested? Contact me!" text="I would very much appereciate it if you sent me a mail:)"/>
                <MailComponent/>
            </div>
        </div>
    )
}   
