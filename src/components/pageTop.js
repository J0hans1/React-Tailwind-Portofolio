import Navbtn from '../components/buttons/navbtn.js';
import { Squash as Hamburger } from 'hamburger-react'

export default Top

function Top(){
    return(
        <div className="lg:h-14 bg-weakTransparent shadow-2xl">
            {/*content*/}
            <div className="flex justify-between sm:justify-evenly text-center lg:justify-between mx-5 sm:mx-20 py-3 sm:flex-col lg:flex-row">
                <h1 className="font-medium sm:text-xl">Markus Johansen</h1> {/*//!got to center text in mobile mode */}
                <div className="justify-center hidden sm:flex lg:justify-evenly my-3 lg:my-0">
                    <Navbtn text="About" onClick="#page2"/>
                    <Navbtn text="Projects" onClick="#page3"/>
                    <Navbtn text="CV" onClick="#page4"/>
                </div>

                <div className='sm:hidden'>
                    <Hamburger size="25" onToggle={toggled => {
                            if (toggled) {
                                // open a menu
                            } else {
                                // close a menu
                            }
                        }
                    }/>
                </div>
            </div>
        </div>
    );
}