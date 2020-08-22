import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import reducers from './reducers';
import App from './App';

// Creating the store using the reducers info.
// That's because reducers are the building blocks of a Redux Store.
// const store = createStore(reducers);

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root')
// );


import Provider from './providers';
import Consumer from './consumer';

ReactDOM.render(
  <Provider>
    <Consumer>
      <App />
    </Consumer>
  </Provider>,
  document.getElementById('root')
);

