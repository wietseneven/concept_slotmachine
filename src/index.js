import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path={`/g/:generatorId`}
             render={(props) => <App {...props} />} />
      {/*<App />*/}
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();