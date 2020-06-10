import React from 'react';
import '../src/client/styles/App.css';
import Home from './client/components/Home';
import store from './client/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Time Logger App</h1>
        <Home />
      </div>
    </Provider>
  );
}

export default App;