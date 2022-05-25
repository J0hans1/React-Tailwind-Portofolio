import '../css/FrontPage.css';
import TitledBox from "./TitledTextBox";
import RoundImage from './RoundImage';
import SocialLinks from './SocialLinks';
import PageTop from './PageTop';

export default FrontPage;

function FrontPage(){
    return (
        <div id="page" class="pages">
            <PageTop/>
            <div class="left-column">
                <TitledBox title="Hello, I am Markus Johansen" text="I am a student of information technologies at the Norwegian University of  Science and Technology (NTNU), Based In Trondheim, Norway."/>
                <SocialLinks/>
            </div>
            <div class="right-column">
                <RoundImage pic="1"/>
            </div>
        </div>
    )
}