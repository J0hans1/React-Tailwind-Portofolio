import '../css/timeline.css';

export default Year;

function Year(props){
    return(
        <div className='years'>
            <p>{props.year}</p>
        </div>
    )
}