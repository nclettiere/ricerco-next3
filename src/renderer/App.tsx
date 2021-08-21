import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { Button } from '@blueprintjs/core';
import Sidebar from './components/Sidebar/Sidebar';

const Hello = () => {
  return (
    <div>
      <Sidebar />
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
