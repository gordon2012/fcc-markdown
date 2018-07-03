import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import marked from 'marked';

// require('expose-loader?marked!marked');
import exposeLoader from 'expose-loader';

ReactDOM.render(<App />, document.getElementById('root'));
