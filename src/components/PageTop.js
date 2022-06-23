import Switch from "./NightModeSwitch";

export default PageTop;

function PageTop(){
    return (
        <div className="flex p-10 mb-5 w-full h-12">
            <div>
                <h2>Markus Johansen</h2>
            </div>
            <div className="absolute right-10">
                <Switch/>
            </div>
        </div>
    )
}