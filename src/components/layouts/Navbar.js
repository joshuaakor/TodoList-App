import todoLogo from '../../todoImage.jpg';

import {motion} from 'framer-motion';

import classes from './Img.module.css';

import {NavLink} from 'react-router-dom';

import klasses from './Navbar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faSquareCheck, faClipboardList, faPlus, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';



function Navbar() {

    const NavLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold': 'normal',
            backgroundColor: isActive ? '#5fc9f3': '',
            color: isActive ? 'black':'',
            border: isActive ? '6px':'',
            borderRadius: isActive ? '6px':'',
            borderHeight: isActive ? '10px':'',
            marginLeft: isActive ? '20px':'',
            marginRight: isActive ? '2px':'',
            
        }
    }
    

    
    return(
        <div className={klasses.sidenav}>
            <motion.div animate={{x:[-10,60,-10]}} transition={{repeat:Infinity, duration:5}}>
                <img src={todoLogo} alt='Logo' className={classes.borderrr}/>
            </motion.div>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>
                        <NavLink  to='/' style={NavLinkStyles}>
                            <FontAwesomeIcon icon={faClipboardList}/>   All Todos
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to= 'new-todos' style={NavLinkStyles}>
                             <FontAwesomeIcon icon={faPlus}/>   New Todos
                             </NavLink>
                    </li>
                    <li>
                        <NavLink to='pending-todos' style={NavLinkStyles}>
                            <FontAwesomeIcon icon={faTriangleExclamation}/>   Pending Todos
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to='done-todos' style={NavLinkStyles}>
                             <FontAwesomeIcon icon={faSquareCheck}/>   Done Todos
                             </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default Navbar;