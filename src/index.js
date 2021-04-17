import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'; //最最外层的壳
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>,
  document.getElementById('root')
);

