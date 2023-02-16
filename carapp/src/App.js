
import './App.css';
// import Menu from './menu/menu';
// import Logo from './logo/logo';
// import logo from './logo/image/logo.jpg'
// import Back from './back/back';
import React from 'react';
import { Component } from 'react';
import Car from './Car/Car';
import './Car/Car.css';
import Timer from './Timer/Timer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import Menudishes from './const/const';


class App extends Component{
  constructor(props){
    console.log("App constructor")
    super(props)
  this.state = {
  cars: [
      {name: "Ford", year: "2018"},
      {name: "Audi", year: "2013"},
      {name: "BMW", year: "2014"}
  ],
  pageTitle: 'React components',
  showCars: false,
  
  }
}
 handleInput = (event) => {
  this.setState({
    pageTitle: event.target.value
  })
}
toggleCarsHandler =() =>{
  this.setState({
    showCars: !this.state.showCars
  })
  
  }
onChangeName(name, index){
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})

}
// onChangeYear(year, index){
//   const year = this.state.cars[index]
//   cars.year = year
//   const cars = [...this.state.cars]
//   cars[index] = year
//   this.setState({cars})
// }


  render(){
    console.log('Car render')

    // if (Math.random() > 0.7){
    //   throw new Error('Car random failed')
    // }

   
    return(
      <div style={{
        border: "1px solid #ccc",
        marginBottom: "10px"
      }}>
        <h1>{this.state.pageTitle}</h1>
        <input type= "text" onChange={this.handleInput}/>
        {/* <input type="text" onChange={this.onChangeName}></input> */}
        <button onClick = {this.toggleCarsHandler}>Toggle cars</button>
      { this.state.showCars 
        ? this.state.cars.map((car, index) => {
        return(
          <ErrorBoundary key={index}>
          <Car
          name = {car.name}
         year = {car.year}
         onChangeTitle = {() => this.onChangeTitleHandler(car.name)}
         onChangeName = {event => this.onChangeName(event.target.value, index)}
         onChangeYear = {event => this.onChangeYear(event.target.value, index)}/>
         </ErrorBoundary>
        )
      })
     :null
    }
    <Timer/>
    </div>
    )}
  }

  

// function App() {
//   return (
//   <div>
//     <div className='logo'>
//     <Logo img={logo} width={'800px'} border={"4px solid black"}/>
//     </div>
//     <Menu menu={"Options"} menu2={"Team"} menu3={"Creations"}/>
//     <Back back={"#E4EFD1"}/>
//     {/* <Menudishes/> */}

    
   
//    </div>
// );


export default App;

