
export default Event;

function Event(props){
    return (
        <div className="flex items-center h-fit w-full hover:first:visible"> 
            {/*date div*/}
            <div className="mr-6 ml-auto" onMouseOver={dotIsHovered()}>
                <p className="text-blackTransparent-strong text-sm">{props.date}</p>
            </div>

            {/*div for line*/}  
            <div className="w-1 bg-blackTransparent-weak"></div>
            {/*div for line*/}  
            <span className="w-6 h-6 my-auto rounded-full" style={{backgroundColor: `${props.color}`}}></span>


            {/*div for content*/}
            <div className="flex mr-auto my-5">
                <div className="ml-6 w-40 text-left mr-0">
                    <h2 className="text-lg mb-2">{props.title}</h2>
                    <p className="text-blackTransparent-strong text-md">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

function dotIsHovered(){
    /*
    const date = document.getElementsByClassName('event-date');
    date.style.visibility = 'visible';
    */
}