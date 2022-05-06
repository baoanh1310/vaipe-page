import React from "react";
import "./App.sass";
import Footer from "./Footer/Footer.jsx";
import Main from './Main'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <Main />
          <Footer />
        </div>
      </Router>
  );
}

export default App;
