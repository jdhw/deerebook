import React, { Component } from "react";
import axios from 'axios';
import { Route, Link } from 'react-router-dom'

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

  componentDidMount = async() => {
    const friend1 = await axios.get("https://randomuser.me/api/");
    const friend2 = await axios.get("https://randomuser.me/api/");
    const friend3 = await axios.get("https://randomuser.me/api/");
    const friend4 = await axios.get("https://randomuser.me/api/");
    const friend5 = await axios.get("https://randomuser.me/api/");

    const friends = [friend1.data.results[0], friend2.data.results[0], friend3.data.results[0],friend4.data.results[0], friend5.data.results[0] ]

    console.log(friends);

    this.setState({
      potentialFriends: friends,
      apiDataLoaded: true
    })

  }

  render(){
    console.log(this.state.potentialFriends);
  return (
    <div className="App">
      <nav>
        <Link to="/">Profile</Link>
        <Link to="/users">Users</Link>

      </nav>

      <h1>HemaBook</h1>
        <Route exact path="/" render={() => (
          <Profile user={this.state.user}/>
        )} />

        <Route path="/users" render={() => (
          <FriendsPage potentialFriends={this.state.potentialFriends}/>
        )} />

      
    </div>
  );
  }

}

/*<Profile user={this.state.user}/>
<FriendsPage potentialFriends={this.state.potentialFriends}/>*/

export default App;
