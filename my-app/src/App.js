import React, {useState } from 'react';
import './App.css';
import Display from './Display';
import Dashboard from './Dashboard';

function App() {
  const [count, setCount] = useState({
    strikes: 0,
    balls: 0
  });

  return (
    <div className="App">
      <Display count={count} />
      <Dashboard count={count} setCount={setCount} />
    </div>
  );
}

export default App;
