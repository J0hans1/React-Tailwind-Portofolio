
export default Event;

function Event(props){
    return (
        <div className="timeline-event">
            <div className="event-text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <span className="event-dot" style={{backgroundColor: `${props.color}`}}></span>
            <div className="event-date" onMouseOver={dotIsHovered()}>
                <p>{props.date}</p>
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