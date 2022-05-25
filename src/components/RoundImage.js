import '../css/RoundImage.css';
import picture1 from '../img/young-me.jpg';
import picture2 from '../img/ski-me.jpg';
export default RoundImage;


function RoundImage(props){
        if (props.pic === "1") {
            return (
                <div id="img" style={{ backgroundImage: `url(${picture1})` }}></div>    
            )
        }
        else {
            return (
                <div id="img" style={{ backgroundImage: `url(${picture2})` }}></div>    
            ) 
        }
}