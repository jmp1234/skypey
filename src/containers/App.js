import React from 'react';
import './App.css';
import Sidebar from '../components/sidebar';
import Main from '../components/main'
// import { contacts } from "../static-data";
import  _ from 'lodash';
import store from '../store';

const { contacts, user, activeUserId  } = store.getState();

export default () => {

  const { contacts, user, activeUserId  } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
};
