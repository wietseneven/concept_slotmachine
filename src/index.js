import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Create from './Components/Create';
import registerServiceWorker from './registerServiceWorker';
import data from './data';
import { HashRouter, Route, Redirect } from 'react-router-dom';

const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// firebase.initializeApp({
//   apiKey: 'AIzaSyDfSQ0_HbH8NSJoQmdLK4cenTxLFTpjloE',
//   authDomain: '### FIREBASE AUTH DOMAIN ###',
//   projectId: 'generator-ab517'
// });
//
// // Initialize Cloud Firestore through Firebase
// var db = firebase.firestore();
// let data = {};
// db.collection("generators").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//     data[doc.id] = doc.data();
//   });
// });

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path={`/g/:generatorId`}
             render={(props) => <App {...props} data={data} />} />
      <Route path={'/create'}
             render={(props) => <Create />} />
      <Route path={'/'}
             exact
             render={(props) => <Redirect to={'/g/concepts'}/>} />
    </div>
  </HashRouter>
, document.getElementById('root'));
registerServiceWorker();