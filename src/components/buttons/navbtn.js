import {useRef} from 'react';

export default Navbtn;


function Navbtn(props) {
    {
    /* 
    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };
*/}

    return (
        <div>
            <button className="w-auto sm:h-8 text-sm sm:text-base font-medium text-gray-500 hover:text-gray-300 mx-2 px-3 sm:px-5 duration-200 rounded-3xl bg-weakTransparent hover:bg-blackTransparent-weak hover:shadow-lg">
                {props.text}
            </button>
        </div>
    )
}