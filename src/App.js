import React from 'react';
import './styles/App.css';
import { Provider } from 'react-redux';
import store from './store'
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          <Header />
          <HomePage />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
