import React from 'react'
//import Screen from './Screen'
import '../App.css'

export default function Numpad(props){

    return(
        <div className="numpad">
          <div name="" onClick={()=>props.register("ac")} className="key sign"> AC </div>
          <div name="" onClick={()=>props.register("+-")} className="key sign"> +/- </div>
          <div name="" onClick={()=>props.register("%")} className="key sign"> % </div>
          <div name="" onClick={()=>props.register("/")} className="key sign"> / </div>                   
          <div name="" onClick={()=>props.register("7")} className="key number"> 7 </div>
          <div name="" onClick={()=>props.register("8")} className="key number"> 8 </div>
          <div name="" onClick={()=>props.register("9")} className="key number"> 9 </div>
          <div name="" onClick={()=>props.register("*")} className="key sign"> * </div>
          <div name="" onClick={()=>props.register("4")} className="key number"> 4 </div>
          <div name="" onClick={()=>props.register("5")} className="key number"> 5 </div>
          <div name="" onClick={()=>props.register("6")} className="key number"> 6 </div>
          <div name="" onClick={()=>props.register("-")} className="key sign"> - </div>
          <div name="" onClick={()=>props.register("1")} className="key number"> 1 </div>
          <div name="" onClick={()=>props.register("2")} className="key number"> 2 </div>
          <div name="" onClick={()=>props.register("3")} className="key number"> 3 </div>
          <div name="" onClick={()=>props.register("+")} className="key sign"> + </div>
          <div name="" onClick={()=>props.register("0")} className="key zero number"> 0 </div>
          <div name="" onClick={()=>props.register(".")} className="key number"> . </div>
          <div name="" onClick={()=>props.register("=")} className="key sign"> = </div>
      </div>
    )
}