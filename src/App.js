import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => {

            return (
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ratione voluptatem ipsum aliquid? Dolores qui quasi, libero adipisci sit nisi natus perferendis distinctio ratione corrupti facilis molestias aspernatur doloremque fugiat.</p>
                <Home {...props}/>
              </div>
            )
          }}>
          </Route>
          <Route path="/about/:id" component={About}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
