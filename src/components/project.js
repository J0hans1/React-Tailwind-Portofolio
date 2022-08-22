import LinkButton from "./buttons/LinkButton";
import ontap from '../img/ontap-example.png';
import book from '../img/BookOfCook.png';
import portfolio from '../img/portfolio.png';

export default Project;

function Project(props){
    if (props.src === "1"){
        return (
            <div className="justify-evenly flex flex-col lg:flex-row w-full rounded-3xl lg:mx-5 mt-10 p-8 bg-weakTransparent ">
                <div className="lg:w-2/5 flex flex-col justify-center mb-10">
                    <h1 className="mb-3 text-lg md:text-4xl font-medium">{props.name}</h1>
                    <p className="text-md md:text-xl">{props.desc}</p>
                </div>

                <div className="lg:w-1/3 justify-evenly flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={ontap} alt=""/>
                    </div>
                    <div className="mx-auto mt-10">
                        <LinkButton text="Link to repository" hyperlink={props.github}/>
                    </div>
                </div>
            </div>
        );
    }
    
    {/*else if (props.src === "2"){
        return (
            <div className="justify-evenly flex flex-col lg:flex-row w-full rounded-3xl mx-5 mt-10 p-8 bg-weakTransparent ">
                <div className="lg:w-2/5 flex flex-col justify-center mb-10">
                    <h1 className="mb-3 text-lg md:text-4xl font-medium">{props.name}</h1>
                    <p className="text-md md:text-xl">{props.desc}</p>
                </div>

                <div className="lg:w-1/3 justify-evenly flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={book} alt=""/>
                    </div>
                    <div className="mx-auto mt-10">
                        <LinkButton text="Link to repository" hyperlink={props.github}/>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="justify-evenly flex flex-col lg:flex-row w-full rounded-3xl mx-5 mt-10 p-8 bg-weakTransparent ">
                <div className="lg:w-2/5 flex flex-col justify-center mb-10">
                    <h1 className="mb-3 text-lg md:text-4xl font-medium">{props.name}</h1>
                    <p className="text-md md:text-xl">{props.desc}</p>
                </div>

                <div className="lg:w-1/3 justify-evenly flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={portfolio} alt=""/>
                    </div>
                    <div className="mx-auto mt-10">
                        <LinkButton text="Link to repository" hyperlink={props.github}/>
                    </div>
                </div>
            </div>
        );
    };*/}


}