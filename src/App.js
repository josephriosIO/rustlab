import React from 'react';
import Nav from './components/Nav';
import './App.css';
import ServersPanel from './components/ServersPanel';

function App() {
  const date = new Date();
  return (
    <div className='App'>
      <Nav />
      <ServersPanel />
      <section className='discord-section'>
        <a className='btn' href='https://discord.gg/FxNpvp6'>
          <span class='socicon socicon-discord padding-right'></span>
          Join
        </a>
      </section>

      <p>© {date.getFullYear()} RustLab</p>
    </div>
  );
}

export default App;
