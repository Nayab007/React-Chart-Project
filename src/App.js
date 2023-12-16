import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Balance from "./components/Mybalance/balance.js";
import Chart from "./components/chart/chart.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Balance />

        </header>
        <Chart />
        <footer class="footer">Build with <span class="heart">&#10084;</span> by Nayab</footer>
      </div>
      
    </Router>
     
  );
}

export default App;
