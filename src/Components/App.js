import React from "react";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <h1>Global Party Supplies</h1>
      <Router>
        <Home path="/" />
        <About path="about" />
        <Support path="support" />
        <Dashboard path="dashboard">
          <Report path=":reportID" />
          <Invoices path="invoices" />
          <Team path="team" />
        </Dashboard>
      </Router>
    </div>
  );
}

export default App;
