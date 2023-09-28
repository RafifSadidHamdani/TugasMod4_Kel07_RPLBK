import React, { useState } from "react";
import "./app.css";

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [nextItemNumber, setNextItemNumber] = useState(1);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      const newItem = `${nextItemNumber}. ${inputText}`;
      setItems([...items, newItem]);
      setNextItemNumber(nextItemNumber + 1);
      setInputText('');
    }
  };

  const handleClearItems = () => {
    setItems([]);
    setNextItemNumber(1);
  };

  return (
    <div className="app">
      <h1>Tugas Modul 4 Kel 07</h1>
      <h4>Add and Clear Our Member Program </h4>
      <h4>Input List </h4>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter an item..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>Add</button>
        <button onClick={handleClearItems}>Clear</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
