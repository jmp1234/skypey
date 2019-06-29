import React from 'react';
import './App.css';
import Sidebar from '../components/sidebar';
import Main from '../components/main'
import { contacts } from "../static-data";
import  _ from 'lodash';


export default () => {
  return (
    <div className="App">
      {/* <Sidebar contacts={contacts}/> */}
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};
