import "./Header.scss"
import React from 'react';
import { Link } from "react-router-dom"
import user from "../../images/user.png"


const Header = () => {
    return (
        <div className="header">
            Header
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            <div className="user-image">
                <img src={user} alt="user image" />
            </div>

        </div>
    );
};

export default Header;