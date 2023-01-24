
// //.......................... CALCULATOR IN REACT.js .................................
import React, { Component } from 'react'
import styles from './Component/Mystyle.module.css'
import './App.css'
export default class App extends Component {
  constructor(){
    super()
    this.state={
    Result:0
    }
  }
  calculate=()=>{
    var x=this.firstnumbox.value*1
    var y=this.secondnumbox.value*1
    var op=this.optionnumbox.value*1
    var z=0;
    switch(op){
      case 1:z=x+y;break;
      case 2:z=x-y;break;
      case 3:z=x*y;break;
      case 4:z=x/y;break;
      case 5:z=x%y;break;
      default:
    }
    this.setState({Result:z})
  }
  render() {
    return (
 
  <div className="stylesbigblue">
        <h1 className={styles.stylesheading}>Calculator</h1>
        <input className={styles.stylesinput} ref={c=>this.firstnumbox=c} placeholder='enter the 1 st no'></input>&nbsp;&nbsp;&nbsp;
        <br></br>  <br></br>
        <input className={styles.stylesinput} ref={c=>this.secondnumbox=c} placeholder='enter the 2nd no'></input>&nbsp;&nbsp;&nbsp;
        <br></br>&nbsp;  <br></br>
        <select className={styles.stylesinput} ref={c=>this.optionnumbox=c} onChange={this.calculate}>
          <option value="1">Addition</option>
          <option value="2">Subtraction</option>
          <option value="3">Multiplication</option>
          <option value="4">Division</option>
          <option value="5">Modulus</option>
        </select>
        <hr></hr>           
        <button className={styles.stylesinput} onClick={this.calculate}> click for answer </button>
        <hr></hr>    
        <h1 className={styles.stylesheading}>Result:{this.state.Result}</h1>
      
      </div>
    )
  }
}


