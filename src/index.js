import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Create from './Components/Create';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path={`/g/:generatorId`}
             render={(props) => <App {...props} />} />
      <Route path={'/create'}
             render={(props) => <Create />} />
      <Route path={'/'}
             exact
             render={(props) => <Redirect to={'/g/concepts'}/>} />
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();