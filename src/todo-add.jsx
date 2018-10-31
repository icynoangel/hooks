import React, {useState, useContext} from 'react';
import {ActionsContext} from './todo-contexts';

const TodoAdd = () => {

  const [name, setName] = useState('');
  const actions = useContext(ActionsContext);

  return <div className="todo-add">
    <input type="text" value={name} onChange={(event) => {
      setName(event.target.value);
    }} />
    <button className="button" onClick={() => {
      actions.addItem(name);
      setName('');
    }}><span>Add</span></button>
  </div>;
}

export default TodoAdd;