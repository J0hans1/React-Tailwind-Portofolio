import '../css/MiddlePage.css';
import LinkButton from "./LinkButton";
import TitledBox from "./TitledTextBox";
import Topics from './TopicBox';

export default MiddlePage;

function MiddlePage(){
    return (
        <div id="page3" class="pages">
            <div class="left-column">
                <div id="left-top">
                    <TitledBox title="Skills and Topics of interest" text="As of today i am still a student of the craft, however I have accumulated some interests and skills in the field of dev and IT:"/>
                </div>
                <div id="left-bottom">
                    <Topics/>
                </div>
            </div>
            <div class="right-column">
                <div id="right-top">
                    <TitledBox title="Projects" text="Through private development and schoolprojects, I have been part of several projects. Beneath is a screenshot of the Ontap-web interface, a project I did with fellow students at NTNU, where I wrote the majority of JS code. i have also provided some links to github repositories for some of my other projects:"/>
                </div>
                <div id="right-bottom">
                    <div id="image-view">
                        <img src="https://i.imgur.com/XqQZQZL.jpg" alt="Markus Johansen"/>
                    </div>
                    <div id="RepoLinks">
                        <LinkButton text="LinkedIn" hyperlink="https://www.linkedin.com/in/markus-johansen-64625b208/"/>
                        <LinkButton text="GitHub" hyperlink="https://github.com/J0hans1"/>
                        <LinkButton text="Mail" hyperlink="mailto:markusarj@gmail.com"/>
                    </div>
                </div>
            </div>
        </div>
    )
}