import "./navbar.scss";

import { useContext, useEffect, useState } from "react";

// import assets

// import functions
import { moveTo } from "../../utils/helperFunctions";

// import components

const Navbar = (props) => {
    return (
        <div className="navbar-container">
            <ul>
                <li onClick={() => moveTo("/products")}>Products</li>
                <li onClick={() => moveTo("/cart")}>Cart</li>
                <li onClick={() => moveTo("/login")}>Login</li>
                <li onClick={() => moveTo("/register")}>Register</li>
            </ul>
        </div>
    );
};

export default Navbar;
