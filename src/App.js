import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Button from "./components/button";
import Display from "./components/display";
import Tictactoe from "./container/tictactoe";

function App() {

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Vicky Pandey</h2>
      <h3>TicTacToe</h3>
      <Tictactoe/>
    </div>
  );
}

const styles = {
  displaycontainer: { padding: 20, margin: 9, backgroundColor: "black", color: "white", },
  button: { margin: 9, padding: 9 }
}

export default App;
