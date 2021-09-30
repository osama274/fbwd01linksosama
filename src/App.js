import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route  exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
