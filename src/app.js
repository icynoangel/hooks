import React, { useState, useEffect } from "react";
import "./app.css";

import TodoList from "./todo-list";
import TodoAdd from "./todo-add";
import todoService from "./todo-service";
import { ActionsContext } from "./todo-contexts";

const App = () => {
  const addItem = name => {
    setItems(todoService.addItem(items, name));
  };

  const changeItem = id => {
    setItems(todoService.changeItem(items, id));
  };

  const deleteItem = id => {
    setItems(todoService.deleteItem(items, id));
  };

  const [items, setItems] = useState([]);

  // mount
  useEffect(() => {
    setItems(todoService.restoreItems());
  }, []);

  // update
  useEffect(() => {
    todoService.storeItems(items);
  });

  return (
    <div className="app">
      <ActionsContext.Provider
        value={{
          addItem,
          changeItem,
          deleteItem
        }}
      >
        <TodoList items={items} />
        <TodoAdd />
      </ActionsContext.Provider>
    </div>
  );
};

export default App;
