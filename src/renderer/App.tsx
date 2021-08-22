import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { Button } from '@blueprintjs/core';
import Sidebar from './components/Sidebar/Sidebar';

const Hello = () => {
  return (
    <div className="app">
      <div className="toolbar"></div>
      <div className="main-container">
        <div className="menu-entry"></div>
        <Sidebar />
        <div className="main-content" />
        <div></div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
