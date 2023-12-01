import classes from './Navbar.module.css';

import Navbar from './Navbar';

function Layout(props){
    return (
        <div>
            <Navbar/>
            <main className={classes.main}>{props.children}</main>

        </div>
    );
}

export default Layout;