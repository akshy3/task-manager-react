import React from 'react';
import './App.css';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './Store';



function App() {


  return (
    <Router>
      <Store>
      <Routes />
      </Store>
    </Router>
  );
}

export default App;
