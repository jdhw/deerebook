import React, { Component } from "react";

import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: {
        name: "Hema Waychal",
        username: "Hema",
        image: "",
        friendList: []
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }

  render(){
  return (
    <div className="App">
      <h1>HemaBook</h1>
      <Profile />
    </div>
  );
  }

}

export default App;
