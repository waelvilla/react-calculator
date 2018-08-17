import React, { Component } from 'react';
import Numpad from './Numpad'
import Screen from './Screen'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      scr:'',
      numbers: [0,1,2,3,4,5,6,7,8,9],
      signs: ['+','/','*','-','%'],
      memo:'',
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(p){
    const screen=this.state.scr
    const signs=this.state.signs
    const nums=this.state.numbers
    if(signs.includes(p)){
      this.setState((currentState)=>{
        return{
          memo: currentState.memo.concat(currentState.scr),
          scr: p,
        }})
    }
    else if(nums.includes(Number(p))){
      
      this.setState((currentState)=>{
        if(signs.includes(screen)){
          return {
            memo: currentState.memo.concat(currentState.scr),            
            scr:p
          }
        }
        else 
          return{
            
            scr: currentState.scr.concat(p),
          }
      })
    }
    else if(p==="ac"){
      this.setState((currentState)=>{
        return{
          scr:"",
          memo: "",
        }})
    }
    else if(p==='='){
      const ans=this.doMath()
      this.setState((currentState)=>{
        return{
          scr:ans,
          memo:'',
        }})
    }
  }

  doMath(){
    console.log("screen:",this.state.scr)
    console.log("memo: ",this.state.memo)
    const exp=this.state.memo.split("")
    const num1=Number(exp[0])
    const num2=Number(this.state.scr)
    const sign=exp[1]
    switch (sign){
      case "+": return num1+num2
      case "-": return num1-num2
      case "*": return num1*num2
      case "/": return num1/num2
      case "%": return num1%num2
      default: return num1+num2
    }
    
  }

  render() {
    return (
      <div>
        <Screen screen={this.state.scr} />   
        <Numpad register={this.handleClick} />
      </div>
    )
  }
}

export default App
