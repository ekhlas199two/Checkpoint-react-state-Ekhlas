import React from 'react';
import './App.css';
import Profile from './Profile';


 class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
  show : false
    };
  }
  toggle = ()=>{
    this.setState({
      show: ! this.state.show
    })
  }


render() {
  return (

    <div>
        <button onClick={this.toggle} >show profile</button>  
        { this.state.show && <Profile />  }

    </div>
  )
}
 }

export default App;
