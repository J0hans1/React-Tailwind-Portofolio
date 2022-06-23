/*import '../css/FourthPage.css';*/
import TitledBox from "../TitledTextBox";
import Timeline from '../timeline-components/Timeline';
import WaveTransition from '../WaveTransition';

export default FourthPage;

function FourthPage(){
    return (
        <div className="relative w-full h-fit m-0 bg-white-ivory">
            <div className="flex flex-col w-full h-fit items-center pb-44 justify-evenly mx-10">
                <Timeline/>
                <div className="flex flex-col mt-10">
                    <TitledBox className="child:text-center" title="Do you care to learn more?" text="Download my curriculum vitae PDF, by clicking the button below!"/> {/*!text center bug*/}
                    <button className="w-auto text-xl h-12 m-0 px-5 duration-200 bg-purple-300 rounded-lg text-white-light hover:underline hover:bg-purple-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-2xl"> Download CV</button>
                </div>
            </div>
            <WaveTransition color="#A29BFE"/>
        </div>
    )
}