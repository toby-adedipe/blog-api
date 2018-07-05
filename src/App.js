import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Articles from './components/articles';
import Bookmarked from './components/bookmarked';
import Home from './components/home';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/articles" component={Articles} />
          <Route path="/bookmarked" component={Bookmarked} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
