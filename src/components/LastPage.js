import '../css/LastPage.css';
import RoundImage from './RoundImage';
import TitledBox from "./TitledTextBox";
import MailComponent from './Mail';

export default LastPage;

function LastPage(){
    return (
        <div id="LastPage" class="pages">
            <div class="left-column">
                <RoundImage backgroundImage="url(https://i.imgur.com/XqQZQZL.jpg)"/>
                <div>
                    <a href="path_to_file" download="proposed_file_name">
                        <button>Download CV</button>
                    </a>
                </div>
            </div>
            <div class="right-column">
                <TitledBox title="Still interested? Contact me!" text="I would very much appereciate it if you sent me a mail:)"/>
                <MailComponent/>
            </div>
        </div>
    )
}
