import {  NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import clsx from 'clsx';

const Navigation = () => {
    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
      };
    return(
        <header className={css.header}>
            <h2>React Router</h2>
            <nav>
                <ul className={css.list}>
                    <li className={css.listItem}><NavLink to="/" className={buildLinkClass}>Home</NavLink></li>
                    <li className={css.listItem}><NavLink to="/movies" className={buildLinkClass}>Movies</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;