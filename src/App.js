import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Button from "./components/button";
import Display from "./components/display";

function App() {
  const [isres, setRes] = useState(false);
  const [value, setValue] = useState("");

  const handleclick = (val) => {
    evaluate(val);
  }

  const evaluate = (val) => {
    if (val === "=") {
      try {
        let displayval = eval(value);
        setValue(displayval);
        setRes(true);
      }
      catch (exception) {
        alert("invalid operation");
        setValue("");
      }
    }

    else {
      if (isres) {
        setValue(val);
        setRes(false);
      }
      else {
        let displayval = value + val;
        setValue(displayval);
      }
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Vicky Pandey</h2>
      <h3>Calculator</h3>
      <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: 200, backgroundColor: "aliceblue", padding: 20 }}>
          <Display containerStyle={styles.displaycontainer} value={value} />
          <div>
            <Button label="9" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
            <Button label="8" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
            <Button label="7" onClick={handleclick} Style={styles.button} />
            <Button label="+" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
          </div>
          <div>
            <Button label="6" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
            <Button label="5" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
            <Button label="4" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
            <Button label="-" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
          </div>
          <div>
            <Button label="3" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
            <Button label="2" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
            <Button label="1" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
            <Button label="/" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
          </div>
          <div>
            <Button label="." onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
            <Button label="0" onClick={handleclick} Style={{ margin: 9, padding: 9 }} />
            <Button label="=" onClick={handleclick} Style={styles.button} />
            <Button label="*" onClick={handleclick} Style={styles.button} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  displaycontainer: { padding: 20, margin: 9, backgroundColor: "black", color: "white", },
  button: { margin: 9, padding: 9 }
}

export default App;
