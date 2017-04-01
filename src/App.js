import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/App.css';

var links = [
  {
    path: '/',
    title: 'Rob Hess',
    isHeading: true
  },
  {
    path: '/teaching',
    title: 'Teaching',
    isLink: true,
    menu: [
      {
        path: '/teaching/cs162-w17/',
        title: 'CS 162'
      }
    ]
  },
  {
    path: 'https://github.com/robwhess',
    title: 'GitHub',
    isRight: true,
    isExternal: true
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar links={links} />
      </Router>
    );
  }
}

export default App;
