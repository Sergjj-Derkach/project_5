import React from 'react';
import classes from './Navbar.module.scss'

const Navbar =()=>{
    return(
        <nav className={classes.navbar}>
            <span className={classes.logo}></span>
            <div className={classes.navbar_menu}>
                <span className={classes.navbar_menu_item}>Home</span>
                <span className={classes.navbar_menu_item}>Products</span>
                <span className={classes.navbar_menu_basket}></span>
            </div>
        </nav>
    )
}

export default Navbar;