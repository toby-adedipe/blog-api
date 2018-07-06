import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Articles from './components/articles';
import Bookmarked from './components/bookmarked';
import Home from './components/home';
import Footer from './components/footer'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route path="/articles" component={Articles} />
          <Route path="/bookmarked" component={Bookmarked} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
