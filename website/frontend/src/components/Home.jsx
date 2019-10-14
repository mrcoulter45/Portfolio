import React, { Component } from 'react';
import './Home.css';
import ProfilePic from '../images/Profile-Pic.JPG';

class Home extends Component {
  render() {
    return (
      <React.Fragment> 
        <h1>Michael's Portfolio</h1>
        <img 
          src={ProfilePic} 
          alt="Profile Pic" 
          className="profile-picture"
        />
      </React.Fragment>
    );
  }
}

export default Home;
