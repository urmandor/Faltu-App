import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './scenes/App';
ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'));

registerServiceWorker();
