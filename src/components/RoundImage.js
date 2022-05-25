import '../css/RoundImage.css';
export default RoundImage;

function RoundImage(props){
    return(
        <div id="img" style = {{backgroundImage:props.backgroundImage}}></div>
    )
}