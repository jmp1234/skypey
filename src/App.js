import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Main from './main'


export default () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};
