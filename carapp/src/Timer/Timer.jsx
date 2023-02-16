import React from "react";
import "../App.css"


class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.back = ['']

    }
    // showTime(){
    //     this.time = setInterval(() => this.setState({ date: new Date()}), 1000);
    // }
    // shouldComponentUpdate(){
    //     if ( this.state.date.getHours  < 8){
    //         // this.back.push('green')
    //        console.log('true')
    //     } else {
    //         // this.back.push('red')
    //         console.log('false')
    //     }

    // } 
    // changebg(props){
    //     if (props.name !== ''){
    //         this.back.push('green')
    //     } else {
    //         this.back.push('red')
    //     }
    // }
    render(){
        const {date} = this.state;
        return (

            <div  className="Timer">
            <p className="hour">{date.getHours()}</p>
            <p className="min">:{date.getMinutes()}</p>
            <p className="sec">: {date.getSeconds()}</p>
            </div>
        );
    }
}
export default Timer;
