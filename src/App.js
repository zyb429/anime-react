import React from 'react';
import NavBar from "./components/navbar";
import Content from "./components/content";
import "./App.css";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Content></Content>
    </div>
  );
}

export default App;
