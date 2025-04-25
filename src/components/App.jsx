import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function additem(newitems) {
    setItems((prev) => {
      return [...prev, newitems];
    });
  }

  function deleteItem(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={additem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              text={todoItem}
              id={index}
              deleteHandler={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
