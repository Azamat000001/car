import React from "react";


const Back = (props) => {
    const btn ={
        backgroundColor: [props.back]
    } 
    return (
        <div className="back" style={btn}>
         <button className="btn">Fortnite</button>
        </div>
    
        
    )
        
 ;}
 export default Back;