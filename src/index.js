import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TrelleApp from './Trelleapp/TrelleApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TrelleApp />, document.getElementById('root'));
registerServiceWorker();
