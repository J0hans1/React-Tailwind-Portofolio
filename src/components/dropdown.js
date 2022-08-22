import Navbtn from '../components/buttons/navbtn.js';
import { Squash as Hamburger } from 'hamburger-react'

export default Dropdown;

function Dropdown(){
    <div className='sm:hidden'>
        <Hamburger size="25" onToggle={toggled => {
            if (toggled.currentTarget.style.backgroundColor) {
                toggled.currentTarget.style.backgroundColor = null;
                toggled.currentTarget.style.color = null;
            } else {
                toggled.currentTarget.style.backgroundColor = 'salmon';
                toggled.currentTarget.style.color = 'white';
            }
            }
        }/>
    </div>
}