import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            Github Search
        </div>
        <div className="ml-auto order-lg-last">
            <ul className="navbar-nav flex-row">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
)