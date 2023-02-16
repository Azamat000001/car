import React from "react";
import "../App.css"
 const Menu = (props) => {
    return (
        <div>
        <nav>
            <ul className="menu">
                <li><a href="#">{props.menu}</a></li>
                <li><a href="#">{props.menu2}</a></li>
                <li><a href="#">{props.menu3}</a></li>
            </ul>
        </nav>
        
        </div>
    
        
    )
        
 ;}

export default Menu;
