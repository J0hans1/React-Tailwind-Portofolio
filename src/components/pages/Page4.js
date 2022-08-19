/*import '../css/FourthPage.css';*/
/*import Timeline from '../timeline-components/Timeline';*/
import WaveTransition from '../WaveTransition';

export default FourthPage;

function FourthPage(){
    return (
        <div className="relative w-full h-fit m-0 bg-white-ivory">
            <div className="flex flex-col w-full h-fit items-center justify-evenly sm:mx-10">
                {/*<Timeline/>*/}
                <div className="flex flex-col mt-10 text-center mx-5">
                    <h1 className="mb-3 text-2xl sm:text-4xl font-medium sm:mb-7">Want more information?</h1>
                    <p className="text-md md:text-xl">Download my curriculum vitae PDF, by clicking the button below!</p>
                    <button className="w-auto text-sm sm:text-xl h-8 sm:h-12 px-3 sm:px-5 mt-10 duration-200 bg-purple-300 rounded-lg text-white-light hover:underline hover:bg-purple-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-2xl"> Download CV</button>
                </div>
            </div>
            <WaveTransition color="#A29BFE"/>
        </div>
    )
}