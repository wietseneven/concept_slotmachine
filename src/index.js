import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Create from './Components/Create';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path={`/g/:generatorId`}
             render={(props) => <App {...props} />} />
      <Route path={'/create'}
             render={(props) => <Create />} />
      <Route path={'/'}
             exact
             render={(props) => <Redirect to={'/g/concepts'}/>} />
    </div>
  </HashRouter>
, document.getElementById('root'));
registerServiceWorker();