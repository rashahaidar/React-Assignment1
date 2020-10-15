import React from 'react';
const style={
    border:"1px solid red"
}
const userInput=(props)=><input style={style} type="text" onChange={props.changed} value={props.userName}></input>

export default userInput;



