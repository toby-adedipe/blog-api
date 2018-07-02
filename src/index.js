import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyDHZQOkBW13DGFBPFSGsEtUvmWO2oajTTU",
    authDomain: "my-blog-e9bdd.firebaseapp.com",
    databaseURL: "https://my-blog-e9bdd.firebaseio.com",
    projectId: "my-blog-e9bdd",
    storageBucket: "my-blog-e9bdd.appspot.com",
    messagingSenderId: "84369456907"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
