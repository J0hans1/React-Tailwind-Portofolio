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
                <TitledBox title="Welcome to my portofolio!" text="Hello, I am Markus Johansen. I am a student of information technologies at the Norwegian University of  Science and Technology (NTNU), Based In Trondheim, Norway. I made this website, because i wanted a 'web based' portofolio and an opportunity to accummulate skills within industry-relevant frameworks (React and Tailwind). "/>
                <SocialLinks id="links"/>
            </div>
            <div class="right-column">
                <RoundImage pic="1"/>
            </div>
        </div>
    )
}