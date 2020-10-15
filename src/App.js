import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state={
    userNames: [
      {
        userName:'Rasha'
      },
      {
        userName : 'Jad'
      },
      {
        userName : 'Hiba'
      }
    ]
  }

  userNameHandler=(event)=>{
    this.setState({
      userNames:[
        {
          userName:'Rasha'
        },
        {
          userName:event.target.value
        },
        {
          userName: 'Hiba'
        }
      ]
    })
      
    }
  

  render(){
  return (
    <div className="App">
      <UserInput changed={this.userNameHandler} userName={this.state.userNames[1].userName}></UserInput>
      <div className="User">
      <UserOutput userName={this.state.userNames[0].userName}>I love to eat burger.</UserOutput>
      <UserOutput userName={this.state.userNames[1].userName}>I love to eat pizza.</UserOutput>
      <UserOutput userName={this.state.userNames[2].userName}>I love to eat pasta</UserOutput>
      </div>
    </div>
  );
  }
}

export default App;
