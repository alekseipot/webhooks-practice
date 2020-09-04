import React from "react";

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="navbar-brand">
            Github Search
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="/" className="nav-link">
                    Main
                </a>
            </li>
            <li className="nav-item">
                <a href="/about" className="nav-link">
                    Information
                </a>
            </li>
        </ul>
    </nav>
)