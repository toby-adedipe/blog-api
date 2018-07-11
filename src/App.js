import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as firebase from 'firebase';

import Articles from './components/articles';
import Bookmarked from './components/bookmarked';
import Home from './components/home';
import Footer from './components/footer'

var config = {
  apiKey: "AIzaSyDHZQOkBW13DGFBPFSGsEtUvmWO2oajTTU",
  authDomain: "my-blog-e9bdd.firebaseapp.com",
  databaseURL: "https://my-blog-e9bdd.firebaseio.com",
  projectId: "my-blog-e9bdd",
  storageBucket: "my-blog-e9bdd.appspot.com",
  messagingSenderId: "84369456907"
};
const articleList = [];

firebase.initializeApp(config);
var rootRef = firebase.database().ref().child('blog');
rootRef.on('value', (snap)=>{
for (let key in snap.val() ){
  articleList.push(key)
}
console.log(articleList)
})



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/articles" component={Articles} allArticles={articleList} />
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
