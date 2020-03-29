import React from 'react';
import Nav from './components/Nav';
import './App.css';
import ServersPanel from './components/ServersPanel';

function App() {
  return (
    <div className='App'>
      <Nav />
      <ServersPanel />
    </div>
  );
}

export default App;
