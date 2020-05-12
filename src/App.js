import React from 'react';
import './App.css';
import Name from './components/name/name.component';
import Cridentials from './components/creadentials/credential.component';
import { Route, Router } from 'react-router-dom';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      dob:'',
      origin:''
    }
  }

  handleChange=(event)=>{
    const {name,value}=event.target;
    this.setState({[name]:value});
  }


render(){
  return (
    <div className="App">
      <h1>This is a simple form service built with React</h1>
      <Route exact path='/' component={()=><Name handleChange={this.handleChange}/>}/>
      <Route exact path='/about' component={()=><Cridentials handleChange={this.handleChange}/>}/>
    </div>
  );
}
  
}

export default App;
