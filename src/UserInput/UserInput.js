import React from 'react';
 
const userInput=(props)=><div>UserName: <input type="text" onChange={props.changed} value={props.useName}></input></div>

export default userInput;



