import React, { Component } from "react";

import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import FriendsPage from './components/FriendsPage';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: {
        name: "Hema Waychal",
        username: "Hema",
        image: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        friendList: ["Mayura", "Vidhu"]
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }

  render(){
  return (
    <div className="App">
      <h1>HemaBook</h1>
      <Profile user={this.state.user}/>
      <FriendsPage />
    </div>
  );
  }

}

export default App;
