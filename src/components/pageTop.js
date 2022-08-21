import hamburger from '../img/typescriptIcon.png'
export default Top

function Top(){
    return(
        <div className="flex  h-14 bg-weakTransparent justify-between px-56 py-3 shadow-2xl">
            <h1 className="font-medium text-xl">Markus Johansen</h1>
            <img src={hamburger} alt="" className="duration-200 hover:rotate-90 h-12 w-12"/>
        </div>
    );
}