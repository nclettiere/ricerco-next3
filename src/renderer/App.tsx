import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Sidebar from './components/Sidebar/Sidebar';
import HierarchySidebar from "./components/Sidebar/Default/HirerarchySidebar";

const Hello = () => {
  return (
    <div className="app">
      <div className="toolbar" />
      <div className="main-container">
        <div className="menu-entry" />
        <HierarchySidebar />
        <div className="main-content" />
        <div />
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
