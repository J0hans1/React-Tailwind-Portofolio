import '../css/FrontPage.css';
import LinkButton from "./LinkButton";
import TitledBox from "./TitledTextBox";
import RoundImage from './RoundImage';

export default FrontPage;

function FrontPage(){
    return (
        <div id="page" class="pages">
            <div class="left-column">
                <TitledBox title="Hello, I am Markus Johansen" text="I am a student of information technologies at the Norwegian University of  Science and Technology (NTNU), Based In Trondheim, Norway."/>
                <div id="bottom">
                    <LinkButton text="LinkedIn" hyperlink="https://www.linkedin.com/in/markus-johansen-64625b208/"/>
                    <LinkButton text="GitHub" hyperlink="https://github.com/J0hans1"/>
                    <LinkButton text="Mail" hyperlink="mailto:markusarj@gmail.com"/>
                </div>
            </div>
            <div class="right-column">
                <RoundImage backgroundImage="url(https://i.imgur.com/XqQZQZL.jpg)"/>
            </div>
        </div>
    )
}