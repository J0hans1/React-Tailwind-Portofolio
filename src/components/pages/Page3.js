// import '../css/MiddlePage.css';
import LinkButton from "../buttons/LinkButton";
import TitledBox from "../TitledTextBox";
import Topics from '../buttons/TopicBox';
import WaveTransition from '../WaveTransition';
import ontap from '../../img/ontap-example.png';

export default MiddlePage;

function MiddlePage(){
    return (
        <div className="relative w-full md:h-screen m-0 bg-gradient-to-b from-purple-100 to-blue">
            <div className='flex flex-col md:flex-row pt-4 mx-50 justify-evenly'>
                <div className="flex flex-col md:w-2/5 h-fit">
                    <div>
                        <TitledBox title="Skills and Topics of interest" text="While i still am a student of the craft, I have accumulated some skills in the field of dev and I. I have also included some skills that i accumulated while working in different shops:"/>
                    </div>
                    <div className="items-center mt-6"> {/*!wont work on topics*/}
                        <Topics/>
                    </div>
                </div>
                <div className="flex flex-col md:w-2/5 h-fit">
                    <div>
                        <TitledBox title="Projects" text="Through private development and schoolprojects, I have been part of several projects. Beneath is a screenshot of the Ontap-web interface, a project I did with fellow students at NTNU, where I wrote the majority of JS code. i have also provided some links to github repositories for some of my other projects:"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="my-6">
                            <img src={ontap} alt="Markus Johansen" className="rounded-2xl"/> {/*src field shall change by button hovered*/}
                        </div>
                        <div>
                            <LinkButton text="BookOfCook" hyperlink="https://github.com/J0hans1/BookOfCook"/>
                            <LinkButton text="Portfolio" hyperlink="https://github.com/J0hans1/React-Tailwind-Portofolio"/>
                            <LinkButton text="Ontap" hyperlink="https://github.com/J0hans1/Ontap"/>
                        </div>
                    </div>
                </div>  
            </div>
            <WaveTransition color="#FFFCF3"/>
        </div>
        
    )
}