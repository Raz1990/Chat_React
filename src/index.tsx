import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {MyFunctions} from './Classess/UsefullFunctions';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

(function () {
    let myFuncs = new MyFunctions();
    myFuncs.init();
})();

registerServiceWorker();
