import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC1jKBLc9RzZt4nk4BS6TkL6zfd5ZX8Mnc',
      authDomain: 'whooper-85ddb.firebaseapp.com',
      databaseURL: 'https://whooper-85ddb.firebaseio.com',
      projectId: 'whooper-85ddb',
      storageBucket: 'whooper-85ddb.appspot.com',
      messagingSenderId: '369902364272'
  };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
          <Router />
        </Provider>
    );
  }
}

export default App;
