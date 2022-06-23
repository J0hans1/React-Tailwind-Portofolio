
export default Topic

function Topic(props){
    return(
        <button className="w-auto text-xl h-12 mr-5 px-5 duration-200 bg-purple-300 rounded-lg text-white-light mt-2  hover:bg-purple-200 cursor-default">{props.text}</button>
    )
}