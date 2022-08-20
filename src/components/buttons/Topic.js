
export default Topic

function Topic(props){
    return(
        <button className="w-auto mx-2 text-sm sm:text-lg h-8 sm:h-12 px-3 sm:px-5 duration-200 bg-ntnu-normal rounded-lg text-white-light mt-2  hover:bg-ntnu-light cursor-default">{props.text}</button>
    )
}