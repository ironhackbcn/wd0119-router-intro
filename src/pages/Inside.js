import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Inside extends Component {
  render() {
    return (
      <div>
        inside about
      </div>
    );
  }
}

export default withRouter(Inside);