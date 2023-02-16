import React from "react";

class Menudishes{
    constructor(src, alt, title, descr, price){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
    }
render(){
return(
    React.createElement(
        "div", 
        React.createElement(
    `
    <div class = "menu_item">
    <img src=${this.src} alt=${this.alt}>
    <h3 class= "title">${this.title}</h3>
    <div class = "descr">${this.descr}</div>
    <div class = "divider"></div>
        <div class = "price">
            <div class = "cost"> Цена</div>
            <div class = "total "><span>${this.price}</span></div>
        </div> 
    </div>

    
    `)
) 
)
        }

new Menudishes(
    "test",
    "test",
    "test",
    "test",
    9,


).render();


export default Menudishes;