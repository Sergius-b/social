import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <span><img src="https://img.icons8.com/ultraviolet/40/000000/user-male.png"/></span>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <span><img src="https://img.icons8.com/ultraviolet/40/000000/sms.png"/></span>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <span><img src="https://img.icons8.com/ultraviolet/40/000000/search--v1.png"/></span>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;