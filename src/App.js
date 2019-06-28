import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Main from './main'


const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
