import picture1 from '../img/young-me.jpg';
import picture2 from '../img/ski-me.jpg';
export default RoundImage;


function RoundImage(props){
        if (props.pic === "1") {
            return (
                <div className='sm:h-[300px] sm:w-[300px] lg:h-[550px] lg:w-[550px] rounded-full bg-center bg-cover duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-2xl'
                style={{ backgroundImage: `url(${picture1})` }}></div>    
            )
        }
        else {
            return (
                <div className='h-[300px] w-[300px] lg:h-[550px] lg:w-[550px] rounded-full bg-center bg-cover duration-200 hover:translate-x-1 hover:-translate-y-1 hover:shadow-2xl'
                style={{ backgroundImage: `url(${picture2})` }}></div>    
            ) 
        }
}