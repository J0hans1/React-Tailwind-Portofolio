/*import '../css/FourthPage.css';*/
/*import Timeline from '../timeline-components/Timeline';*/
import WaveTransition from '../WaveTransition';
import Download from '../buttons/download';

export default FourthPage;

function FourthPage(){
    return (
        <div id="page4" className="relative w-full h-fit m-0 bg-white-ivory">
            <div className="flex flex-col w-full h-fit items-center justify-evenly sm:mx-10">
                {/*<Timeline/>*/}
                <div className="flex flex-col my-10 text-center mx-5">
                    <h1 className="mb-3 text-2xl sm:text-4xl font-medium sm:mb-7">Want more information?</h1>
                    <p className="text-md md:text-xl">Download my curriculum vitae PDF, by clicking the button below!</p>
                    <Download/>
                </div>
            </div>
            {/*<WaveTransition color="#A29BFE"/>*/}
        </div>
    )
}