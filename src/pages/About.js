import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InsideWithRouter from './Inside';

class About extends Component {
  render() {
    return (
      <div>
        About
        {/* <Other> */}
        <InsideWithRouter myProp={'hello'} />
        <Link to={'/'}>Home</Link>
      </div>
    );
  }
}

export default About;