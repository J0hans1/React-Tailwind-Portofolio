import '../css/FourthPage.css';
import TitledBox from "./TitledTextBox";

export default FourthPage;

function FourthPage(){
    return (
        <div id="page4" class="pages">
            <div class="left-column">
                <img src="https://i.imgur.com/XqQZQZL.jpg" alt="Markus Johansen"/>
                <img src="https://i.imgur.com/XqQZQZL.jpg" alt="Markus Johansen"/>
            </div>
            <div class="right-column">
                <TitledBox title="Why did i create this webpage?" text="I did this webpage project for several reasons. The first reason is that i wanted to learn TypeScript, so i decided to build the content of this webpage, entirely in TS. The second reason for building this page, was to provide my github account with more front-end content. I also used this page, as an opportunity to further improve my css, and perhaps flash some knowledge of it too. The third reason for the developement of this webpage, is that i want to show myself from a more exciting point of view. Instead of simply handing over a job application and my Curriculum Vitae, potenital employers or partners may see this page."/>
            </div>
        </div>
    )
}