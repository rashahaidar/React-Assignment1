import React from 'react';
import './UserOutput.css'

const style={
    color:"red",
    fontSize:18
}
const userOutput=(props)=>{
   
    return(
        <div className="UserOutput">
        <p style={style}>My name is {props.userName}</p>
        <p>{props.children}</p>
        </div>
    )
}

export default userOutput;