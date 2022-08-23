import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Users from './users/pages/Users';
const App = () => {
  return (
      <Users/>
  );
}

export default App;