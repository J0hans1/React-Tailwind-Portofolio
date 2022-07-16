
export default Event;

function Event(props){
    return (
        <div className="flex items-center h-fit w-full hover:first:visible"> 
        {
        //! wont work hover:first:visible
        //!sjekk ut muligheten for å bruke peer class i tailwind for å basere seg på sibling state isteden
        //!sett deg inn i state
        }
            <div className=" mr-6 ml-auto" onMouseOver={dotIsHovered()}>
                <p className="text-blackTransparent-strong text-sm">{props.date}</p>
            </div>
            <div className="flex mr-10">
                <div className="w-1 bg-blackTransparent-weak"></div>
                <span className="w-6 h-6 my-auto rounded-full" style={{backgroundColor: `${props.color}`}}></span>
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