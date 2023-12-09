import React from 'react';
import { BrowserRouter as Router, } from "react-router-dom";
import Balance  from "./components/Mybalance/balance.js";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Balance />  
      </header>
    </div>
    </Router>
  );
}

export default App;