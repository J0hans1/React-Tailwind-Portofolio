import '../css/PageTop.css'
import Switch from "./NightModeSwitch";

export default PageTop;

function PageTop(){
    return (
        <div id="pagetop">
            <div id="pagetop-left">
                <h2>Markus Johansen</h2>
            </div>
            <div id="pagetop-right">
                <Switch/>
            </div>
        </div>
    )
}