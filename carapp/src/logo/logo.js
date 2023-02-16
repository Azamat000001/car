import React from "react";
const Logo = (props) => {
    return (
        <div>
            <div className="logo">
            <img src={props.img} width={props.width} border={props.border}></img>
            </div>
        </div>
    
        
    );
};
 export default Logo;