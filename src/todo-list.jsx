import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({items, changeItem, deleteItem}) => {

  return <div className="list">
    {items.length ?
      <ul className="list-items">
        <li key="title" className="list-title">Your items</li>
        {items.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </ul> : <span className="list-title">No items</span>}
  </div>;
}

export default TodoList;